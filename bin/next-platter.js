#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { spawn } from "cross-spawn"; // Use cross-spawn for multi-platform support
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

// Prompt user for git initialization
const gitInitAnswer = await inquirer.prompt([
  {
    type: "confirm",
    name: "initializeGit",
    message: "Do you want to initialize a git repository?",
    default: true,
  },
]);

if (gitInitAnswer.initializeGit) {
  // Start spinner for git initialization
  const gitSpinner = ora(chalk.blue("Initializing git repository...")).start();

  // Initialize git repository
  try {
    const gitInitProcess = spawn("git", ["init"], { cwd: projectDir });

    gitInitProcess.stdout.on("data", (data) => {
      // Suppress git init output
    });

    gitInitProcess.stderr.on("data", (data) => {
      // Suppress git init error output
    });

    gitInitProcess.on("close", (code) => {
      if (code === 0) {
        gitSpinner.succeed(chalk("Git repository initialized successfully!"));

        // Add .gitignore file
        const gitignoreContent = `
# Ignore node_modules
node_modules/

# Ignore build files
.next/
out/

# Ignore environment variables
.env
.env.local

# Ignore logs
*.log

# Ignore OS-specific files
.DS_Store
Thumbs.db
        `;

        fs.writeFileSync(
          path.join(projectDir, ".gitignore"),
          gitignoreContent.trim(),
        );

        // Create initial commit
        createInitialCommit();
      } else {
        gitSpinner.fail(chalk.red("Failed to initialize git repository."));
        promptInstallDependencies(); // Continue to prompt for dependency installation even if git init fails
      }
    });
  } catch (error) {
    gitSpinner.fail(chalk.red("Failed to initialize git repository."));
    console.error(chalk.red(error.message));
    promptInstallDependencies(); // Continue to prompt for dependency installation even if git init fails
  }
} else {
  promptInstallDependencies();
}

function promptInstallDependencies() {
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "installDependencies",
        message: "Do you want to install dependencies?",
        default: true,
      },
    ])
    .then((answers) => {
      if (answers.installDependencies) {
        console.log(
          chalk.yellow("This might take a few seconds. Please be patient..."),
        );
        installDependencies();
      } else {
        showCompletionMessage(true);
      }
    });
}

let installProcess;
let installSpinner;

function installDependencies() {
  installSpinner = ora(chalk.blue("Installing dependencies...")).start();

  try {
    // Use cross-spawn to handle platform-specific issues
    installProcess = spawn("npm", ["install"], { cwd: projectDir });

    // Capture stdout and stderr
    installProcess.stdout.on("data", (data) => {
      // Append the output to the spinner text
      installSpinner.text = chalk.blue(
        `Installing dependencies...\n${data.toString().trim()}`,
      );
    });

    installProcess.stderr.on("data", (data) => {
      // Append the error output to the spinner text
      installSpinner.text = chalk.blue(
        `Installing dependencies...\n${data.toString().trim()}`,
      );
    });

    installProcess.on("close", (code) => {
      if (code === 0) {
        installSpinner.succeed(chalk("Dependencies installed successfully!"));
        showCompletionMessage(false);
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

function createInitialCommit() {
  const commitSpinner = ora(chalk.blue("Creating initial commit...")).start();

  try {
    // Stage all changes
    const gitAddProcess = spawn("git", ["add", "."], { cwd: projectDir });

    gitAddProcess.on("close", (code) => {
      if (code === 0) {
        // Create the initial commit
        const gitCommitProcess = spawn(
          "git",
          ["commit", "-m", "Initial commit from next-platter"],
          { cwd: projectDir },
        );

        gitCommitProcess.on("close", (code) => {
          if (code === 0) {
            commitSpinner.succeed(
              chalk("Initial commit created successfully!"),
            );
          } else {
            commitSpinner.fail(chalk.red("Failed to create initial commit."));
          }
          promptInstallDependencies();
        });
      } else {
        commitSpinner.fail(
          chalk.red("Failed to stage changes for initial commit."),
        );
        promptInstallDependencies();
      }
    });
  } catch (error) {
    commitSpinner.fail(chalk.red("Failed to create initial commit."));
    console.error(chalk.red(error.message));
    promptInstallDependencies();
  }
}

function showCompletionMessage(skipDependencies) {
  // Done! Show a beautiful boxed message
  const successMessage = boxen(
    chalk(`
Done! Your project is ready.

Run the following commands to start:

  ${
    skipDependencies
      ? chalk.cyan(`      cd ${projectName}
        npm install
        npm run dev`)
      : chalk.cyan(`      cd ${projectName}
        npm run dev`)
  }

`),
    {
      padding: 0.5,
      margin: 1,
      borderStyle: "round",
    },
  );

  console.log(successMessage);
}
