#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { spawn } from "child_process";
import { fileURLToPath } from "url";
import chalk from "chalk";
import ora from "ora";
import boxen from "boxen";
import inquirer from "inquirer";

// Get the project name from the command line
let projectName = process.argv[2];

if (!projectName) {
  const answers = await inquirer.prompt([
    {
      type: "input",
      name: "projectName",
      message: "Please provide a project name:",
      validate: (input) => (input ? true : "Project name cannot be empty"),
    },
  ]);
  projectName = answers.projectName;
}

// Define paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "../template");
const projectDir = path.resolve(projectName);

// Create the project directory
if (fs.existsSync(projectDir)) {
  console.error(chalk.red(`Error: Directory "${projectName}" already exists.`));
  process.exit(1);
}
fs.mkdirSync(projectDir, { recursive: true });

// Function to copy files while excluding specific files/directories
const copyFiles = (source, destination) => {
  const files = fs.readdirSync(source);
  const exclude = ["node_modules", "package-lock.json"]; // Add any other files/dirs to exclude

  for (const file of files) {
    if (exclude.includes(file)) {
      continue;
    }

    const srcFile = path.join(source, file);
    const destFile = path.join(destination, file);

    if (fs.lstatSync(srcFile).isDirectory()) {
      fs.mkdirSync(destFile, { recursive: true });
      copyFiles(srcFile, destFile);
    } else {
      fs.copyFileSync(srcFile, destFile);
    }
  }
};

// Start spinner for project creation
const spinner = ora(chalk.blue(`Creating project "${projectName}"...`)).start();

// Handle Ctrl+C to stop the process
process.on("SIGINT", () => {
  console.log(chalk.red("\nProcess interrupted. Cleaning up..."));
  spinner.fail("Process interrupted.");
  process.exit(1);
});

// Copy template files to the new project directory
copyFiles(templateDir, projectDir);

// Stop spinner and log success
spinner.succeed(chalk(`Project "${projectName}" created successfully!`));

// Start spinner for dependency installation
const installSpinner = ora(chalk.blue("Installing dependencies...")).start();

// Install dependencies
try {
  process.chdir(projectDir);
  const installProcess = spawn("npm", ["install"], { stdio: "inherit" });

  installProcess.on("close", (code) => {
    if (code === 0) {
      installSpinner.succeed(chalk("Dependencies installed successfully!"));

      // Done! Show a beautiful boxed message
      const successMessage = boxen(
        chalk(`
Done! Your project is ready.

Run the following commands to start:

  ${chalk.cyan(`cd ${projectName}`)}
  ${chalk.cyan("npm run dev")}
`),
        {
          padding: 0.5,
          margin: 1,
          borderStyle: "round",
        },
      );

      console.log(successMessage);
    } else {
      installSpinner.fail(chalk.red("Failed to install dependencies."));
      process.exit(1);
    }
  });
} catch (error) {
  installSpinner.fail(chalk.red("Failed to install dependencies."));
  console.error(chalk.red(error.message));
  process.exit(1);
}
