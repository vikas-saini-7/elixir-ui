#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

// Utility Functions
const logSuccess = (message) => console.log(`\x1b[32m✔ ${message}\x1b[0m`);
const logError = (message) => console.error(`\x1b[31m✖ ${message}\x1b[0m`);

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cwd = process.cwd();
const templatesDir = path.join(__dirname, "templates");

/**
 * Initializes the project by creating essential files like `tailwind.config.js` and `components.json`.
 */
function init() {
  try {
    // Tailwind Config
    const tailwindConfigPath = path.join(cwd, "tailwind.config.js");
    const componentsConfigPath = path.join(cwd, "components.json");

    if (!fs.existsSync(tailwindConfigPath)) {
      fs.writeFileSync(
        tailwindConfigPath,
        `
module.exports = {
  content: ['./app/**/*.{js,jsx}', './pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
      `.trim()
      );
      logSuccess("Created tailwind.config.js");
    }

    // Components Config
    if (!fs.existsSync(componentsConfigPath)) {
      fs.writeFileSync(
        componentsConfigPath,
        JSON.stringify({ components: [] }, null, 2)
      );
      logSuccess("Created components.json");
    }

    // Install dependencies
    logSuccess("Installing dependencies...");
    execSync("npm install clsx framer-motion tailwindcss", {
      stdio: "inherit",
    });
    logSuccess("Dependencies installed successfully.");
  } catch (err) {
    logError(err.message);
  }
}

/**
 * Generates a reusable component based on the provided name.
 * @param {string} componentName - Name of the component.
 */
function addComponent(componentName) {
  try {
    if (!componentName) {
      throw new Error("Please provide a component name.");
    }

    // Capitalize the first letter of the component name
    const capitalizedComponentName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);

    const appDir = path.join(cwd, "app");
    const pagesDir = path.join(cwd, "pages");
    const componentsDir = path.join(cwd, "src", "components");
    let targetDir;

    // Determine where to place components
    if (fs.existsSync(appDir)) {
      targetDir = path.join(appDir, "components"); // Next.js -> App Router
    } else if (fs.existsSync(pagesDir)) {
      targetDir = path.join(cwd, "components"); // Next.js -> Pages Router
    } else {
      targetDir = componentsDir; // Default for React.js
    }

    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    const componentPath = path.join(
      targetDir,
      `${capitalizedComponentName}.jsx`
    );
    if (fs.existsSync(componentPath)) {
      throw new Error(`${capitalizedComponentName} component already exists.`);
    }

    // Select appropriate template
    const templatePath = path.join(
      templatesDir,
      `${componentName.toLowerCase()}.jsx`
    );
    const defaultTemplatePath = path.join(templatesDir, "general.jsx");

    if (!fs.existsSync(templatePath) && !fs.existsSync(defaultTemplatePath)) {
      throw new Error(`component not found: ${componentName}`);
    }

    const template = fs.existsSync(templatePath)
      ? fs.readFileSync(templatePath, "utf8")
      : fs.readFileSync(defaultTemplatePath, "utf8");

    const componentCode = template.replace(
      /COMPONENT_NAME/g,
      capitalizedComponentName
    );

    fs.writeFileSync(componentPath, componentCode.trim());
    logSuccess(`${capitalizedComponentName} component added.`);

    // Update components.json
    const componentsConfigPath = path.join(cwd, "components.json");
    const componentsConfig = JSON.parse(
      fs.readFileSync(componentsConfigPath, "utf8")
    );
    componentsConfig.components.push(capitalizedComponentName);
    fs.writeFileSync(
      componentsConfigPath,
      JSON.stringify(componentsConfig, null, 2)
    );
    logSuccess(`Updated components.json with ${capitalizedComponentName}`);
  } catch (err) {
    logError(err.message);
  }
}

// CLI Command Handling
const args = process.argv.slice(2);

if (args.length === 0) {
  logError("Please specify a command: init or add <component-name>.");
  process.exit(1);
}

const command = args[0].toLowerCase();

if (command === "init") {
  init();
} else if (command === "add") {
  const componentName = args[1];
  addComponent(componentName);
} else {
  logError(`Unknown command: ${command}`);
  process.exit(1);
}
