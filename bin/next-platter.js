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
  const exclude = ["node_modules", "package-lock.json", ".next"];

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
  if (installProcess) {
    installProcess.kill("SIGINT");
  }
  if (installSpinner) {
    installSpinner.fail("Process interrupted.");
  } else {
    spinner.fail("Process interrupted.");
  }
  process.exit(1);
});

// Copy template files to the new project directory
copyFiles(templateDir, projectDir);

// Stop spinner and log success
spinner.succeed(chalk(`Project "${projectName}" created successfully!`));

// Start spinner for git initialization
const gitSpinner = ora(chalk.blue("Initializing git repository...")).start();

// Initialize git repository
try {
  process.chdir(projectDir);
  const gitInitProcess = spawn("git", ["init"]);

  gitInitProcess.stdout.on("data", (data) => {
    // Suppress git init output
  });

  gitInitProcess.stderr.on("data", (data) => {
    // Suppress git init error output
  });

  gitInitProcess.on("close", (code) => {
    if (code === 0) {
      gitSpinner.succeed(chalk("Git repository initialized successfully!"));

      // Inform the user that the installation might take a while
      console.log(
        chalk.yellow("This might take a few minutes. Please be patient..."),
      );

      // Start spinner for dependency installation
      installDependencies();
    } else {
      gitSpinner.fail(chalk.red("Failed to initialize git repository."));
      installDependencies(); // Continue to install dependencies even if git init fails
    }
  });
} catch (error) {
  gitSpinner.fail(chalk.red("Failed to initialize git repository."));
  console.error(chalk.red(error.message));
  installDependencies(); // Continue to install dependencies even if git init fails
}

let installProcess;
let installSpinner;

function installDependencies() {
  installSpinner = ora(chalk.blue("Installing dependencies...")).start();

  try {
    installProcess = spawn("npm", ["install"]);

    installProcess.stdout.on("data", (data) => {
      installSpinner.text = chalk.blue(`Installing dependencies...\n${data}`);
    });

    installProcess.stderr.on("data", (data) => {
      installSpinner.text = chalk.blue(`Installing dependencies...\n${data}`);
    });

    installProcess.on("close", (code) => {
      if (code === 0) {
        installSpinner.succeed(chalk("Dependencies installed successfully!"));
        showCompletionMessage();
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
}

function showCompletionMessage() {
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
}
