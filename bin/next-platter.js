#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { spawn } from "cross-spawn";
import { fileURLToPath } from "url";
import chalk from "chalk";
import ora from "ora";
import boxen from "boxen";
import inquirer from "inquirer";

// Template configuration
const TEMPLATES = {
  frontend: {
    name: "Frontend Templates",
    templates: [
      {
        name: "next-basic",
        displayName: "Next.js Basic",
        description: "Basic Next.js setup with TypeScript and Tailwind CSS",
      },
    ],
  },
  fullstack: {
    name: "Fullstack Templates",
    templates: [
      {
        name: "next-auth-prisma",
        displayName: "Next.js + Auth + Prisma",
        description:
          "Complete fullstack setup with auth using Prisma ORM",
      },
      {
        name: "next-auth-drizzle",
        displayName: "Next.js + Auth + Drizzle",
        description:
          "Complete fullstack setup with auth using Drizzle ORM",
      },
    ],
  },
};

// Function to display help message
function showHelp() {
  const helpMessage = boxen(
    chalk(`
${chalk.bold.green("next-platter")} - A powerful CLI tool to quickly scaffold Next.js applications

${chalk.bold("Usage:")}
  next-platter [project-name] [options]

${chalk.bold("Arguments:")}
  project-name        Name of the new project (optional - will prompt if not provided)

${chalk.bold("Options:")}
  --help, -h         Show this help message

${chalk.bold("Examples:")}
  next-platter my-app
  next-platter --help

${chalk.bold("Features:")}
  • Multiple template categories (Frontend & Fullstack)
  • Interactive template selection
  • Optional git repository initialization
  • Automatic dependency installation
  • Pre-configured with TypeScript, Tailwind CSS, and more

${chalk.bold("Available Templates:")}
  ${chalk.cyan("Frontend:")} Basic, Dashboard, E-commerce, Blog
  ${chalk.cyan("Fullstack:")} Auth+Prisma, tRPC+Prisma, Supabase, Firebase

${chalk.bold("Description:")}
  next-platter streamlines your development workflow by scaffolding
  a complete Next.js application with your choice of template and
  modern development tools already configured.
`),
    {
      padding: 1,
      margin: 1,
      borderStyle: "round",
      borderColor: "green",
    }
  );

  console.log(helpMessage);
}

// Function to select template category and specific template
async function selectTemplate() {
  // First, select the category
  const categoryAnswer = await inquirer.prompt([
    {
      type: "list",
      name: "category",
      message: "Select a template category:",
      choices: [
        {
          name: `${chalk.blue("Frontend")} - Client-side focused templates`,
          value: "frontend",
        },
        {
          name: `${chalk.green("Fullstack")} - Complete frontend + backend templates`,
          value: "fullstack",
        },
      ],
    },
  ]);

  const selectedCategory = TEMPLATES[categoryAnswer.category];

  // Then, select the specific template
  const templateAnswer = await inquirer.prompt([
    {
      type: "list",
      name: "template",
      message: `Select a ${selectedCategory.name.toLowerCase()} template:`,
      choices: selectedCategory.templates.map((template) => ({
        name: `${chalk(template.displayName)} - ${chalk.blue(
          template.description
        )}`,
        value: template.name,
      })),
    },
  ]);

  return {
    category: categoryAnswer.category,
    template: templateAnswer.template,
    templateInfo: selectedCategory.templates.find(
      (t) => t.name === templateAnswer.template
    ),
  };
}

// Check for help flag
const args = process.argv.slice(2);
if (args.includes("--help") || args.includes("-h")) {
  showHelp();
  process.exit(0);
}

// Get the project name from the command line
let projectName = args.find((arg) => !arg.startsWith("--") && arg !== "-h");

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

// Select template
console.log(chalk.blue("\nLet's select a template for your project:\n"));
const selectedTemplate = await selectTemplate();

console.log(
  chalk.green(
    `\nSelected: ${selectedTemplate.templateInfo.displayName} (${selectedTemplate.category})\n`
  )
);

// Define paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(
  __dirname,
  "../templates",
  selectedTemplate.category,
  selectedTemplate.template
);
const projectDir = path.resolve(projectName);

// Check if template exists
if (!fs.existsSync(templateDir)) {
  console.error(
    chalk.red(
      `Error: Template "${selectedTemplate.template}" not found at ${templateDir}`
    )
  );
  console.log(
    chalk.yellow(
      "Please ensure the template directory exists in the templates folder."
    )
  );
  process.exit(1);
}

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
const spinner = ora(
  chalk.blue(
    `Creating project "${projectName}" with ${selectedTemplate.templateInfo.displayName} template...`
  )
).start();

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
spinner.succeed(
  chalk(
    `Project "${projectName}" created successfully with ${selectedTemplate.templateInfo.displayName} template!`
  )
);

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
          gitignoreContent.trim()
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
          chalk.yellow("This might take a few seconds. Please be patient...")
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
        `Installing dependencies...\n${data.toString().trim()}`
      );
    });

    installProcess.stderr.on("data", (data) => {
      // Append the error output to the spinner text
      installSpinner.text = chalk.blue(
        `Installing dependencies...\n${data.toString().trim()}`
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
          { cwd: projectDir }
        );

        gitCommitProcess.on("close", (code) => {
          if (code === 0) {
            commitSpinner.succeed(
              chalk("Initial commit created successfully!")
            );
          } else {
            commitSpinner.fail(chalk.red("Failed to create initial commit."));
          }
          promptInstallDependencies();
        });
      } else {
        commitSpinner.fail(
          chalk.red("Failed to stage changes for initial commit.")
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

${chalk.bold("Template:")} ${selectedTemplate.templateInfo.displayName}
${chalk.bold("Category:")} ${selectedTemplate.category}

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
    }
  );

  console.log(successMessage);
}