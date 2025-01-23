#!/usr/bin/env node
import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// Get the project name from the command line
const projectName = process.argv[2];
if (!projectName) {
  console.error("Please provide a project name.");
  console.log("Usage: npx create-next-starter-template <project-name>");
  process.exit(1);
}

// Define paths
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const templateDir = path.join(__dirname, "../template");
const projectDir = path.resolve(projectName);

// Create the project directory
if (fs.existsSync(projectDir)) {
  console.error(`Error: Directory "${projectName}" already exists.`);
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

console.log(`Creating project "${projectName}"...`);
copyFiles(templateDir, projectDir);

// Install dependencies
console.log("Installing dependencies...");
process.chdir(projectDir);
execSync("npm install", { stdio: "inherit" });

// Done!
console.log("Done! Your project is ready.");
console.log(`Run the following commands to start:
  cd ${projectName}
  npm run dev
`);
