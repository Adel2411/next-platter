#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import chalk from "chalk";
import ora from "ora";
import boxen from "boxen";

// Get the project name from the command line
const projectName = process.argv[2];
if (!projectName) {
  console.error(chalk.red("Please provide a project name."));
  console.log(
    chalk.blue("Usage: npx create-next-starter-template <project-name>"),
  );
  process.exit(1);
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

// Copy template files to the new project directory
copyFiles(templateDir, projectDir);

// Stop spinner and log success
spinner.succeed(chalk.green(`Project "${projectName}" created successfully!`));

// Start spinner for dependency installation
const installSpinner = ora(chalk.blue("Installing dependencies...")).start();

// Install dependencies
try {
  process.chdir(projectDir);
  execSync("npm install", { stdio: "pipe" }); // Use "pipe" to capture output
  installSpinner.succeed(chalk.green("Dependencies installed successfully!"));
} catch (error) {
  installSpinner.fail(chalk.red("Failed to install dependencies."));
  console.error(chalk.red(error.message));
  process.exit(1);
}

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
