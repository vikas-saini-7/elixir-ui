#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";
import { Command } from "commander";
import chalk from "chalk";

// Utility Functions
const logSuccess = (message) => console.log(chalk.green(`✔ ${message}`));
const logError = (message) => console.error(chalk.red(`✖ ${message}`));
const logInfo = (message) => console.log(chalk.blue(`ℹ ${message}`));
const logWarning = (message) => console.log(chalk.yellow(`⚠ ${message}`));

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const cwd = process.cwd();
const templatesDir = path.join(__dirname, "templates");

// Get package version
const packageJsonPath = path.join(__dirname, "package.json");
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
const version = packageJson.version;

/**
 * Detects the framework being used in the current project
 * @returns {Object} Framework information including type, version, and structure
 */
function detectFramework() {
  const packageJsonPath = path.join(cwd, "package.json");

  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(
      "package.json not found. Please run this command in a React/Next.js project root."
    );
  }

  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };

  // Check if project uses TypeScript
  const hasTypeScript = !!(
    dependencies.typescript ||
    dependencies["@types/react"] ||
    fs.existsSync(path.join(cwd, "tsconfig.json"))
  );

  const fileExtension = hasTypeScript ? "tsx" : "jsx";

  // Check for Next.js
  if (dependencies.next) {
    const appDir = path.join(cwd, "app");
    const pagesDir = path.join(cwd, "pages");

    if (fs.existsSync(appDir)) {
      return {
        type: "nextjs",
        version: dependencies.next,
        router: "app",
        componentsDir: path.join(appDir, "components", "ui"),
        hasAppDir: true,
        hasPagesDir: fs.existsSync(pagesDir),
        hasTypeScript,
        fileExtension,
      };
    } else if (fs.existsSync(pagesDir)) {
      return {
        type: "nextjs",
        version: dependencies.next,
        router: "pages",
        componentsDir: path.join(cwd, "components", "ui"),
        hasAppDir: false,
        hasPagesDir: true,
        hasTypeScript,
        fileExtension,
      };
    }
  }

  // Check for Vite
  if (dependencies.vite) {
    const srcDir = path.join(cwd, "src");
    if (fs.existsSync(srcDir)) {
      return {
        type: "vite",
        version: dependencies.vite,
        componentsDir: path.join(srcDir, "components", "ui"),
        hasSrcDir: true,
        hasTypeScript,
        fileExtension,
      };
    } else {
      return {
        type: "vite",
        version: dependencies.vite,
        componentsDir: path.join(cwd, "components", "ui"),
        hasSrcDir: false,
        hasTypeScript,
        fileExtension,
      };
    }
  }

  // Check for Create React App or generic React
  if (dependencies.react) {
    const srcDir = path.join(cwd, "src");
    const publicDir = path.join(cwd, "public");

    if (fs.existsSync(srcDir) && fs.existsSync(publicDir)) {
      return {
        type: "create-react-app",
        version: dependencies.react,
        componentsDir: path.join(srcDir, "components", "ui"),
        hasSrcDir: true,
        hasTypeScript,
        fileExtension,
      };
    } else {
      return {
        type: "react",
        version: dependencies.react,
        componentsDir: path.join(cwd, "components", "ui"),
        hasSrcDir: false,
        hasTypeScript,
        fileExtension,
      };
    }
  }

  throw new Error(
    "Could not detect a supported React framework. Please ensure you're in a React, Next.js, or Vite project."
  );
}

/**
 * Gets available component templates
 * @returns {Array} List of available component names
 */
function getAvailableComponents() {
  if (!fs.existsSync(templatesDir)) {
    logWarning("Templates directory not found. No components available.");
    return [];
  }

  return fs
    .readdirSync(templatesDir)
    .filter((file) => file.endsWith(".jsx") || file.endsWith(".tsx"))
    .map((file) => file.replace(/\.(jsx|tsx)$/, ""))
    .filter((name) => name !== "general")
    .filter((name, index, arr) => arr.indexOf(name) === index); // Remove duplicates
}
/**
 * Initializes the project by creating essential files and setting up the component structure.
 */
function init() {
  try {
    logInfo("Initializing Elixir UI in your project...");

    // Detect framework
    const framework = detectFramework();
    logInfo(
      `Detected framework: ${framework.type} ${framework.version || ""} ${
        framework.hasTypeScript ? "(TypeScript)" : "(JavaScript)"
      }`
    );

    // Create components directory
    if (!fs.existsSync(framework.componentsDir)) {
      fs.mkdirSync(framework.componentsDir, { recursive: true });
      logSuccess(
        `Created components directory: ${path.relative(
          cwd,
          framework.componentsDir
        )}`
      );
    }

    // Create Tailwind config based on framework
    const tailwindConfigPath = path.join(cwd, "tailwind.config.js");
    if (!fs.existsSync(tailwindConfigPath)) {
      const tailwindConfig = createTailwindConfig(framework);
      fs.writeFileSync(tailwindConfigPath, tailwindConfig);
      logSuccess("Created tailwind.config.js");
    } else {
      logWarning("tailwind.config.js already exists. Skipping creation.");
    }

    // Create global CSS file if it doesn't exist
    const globalsCssPath =
      framework.type === "nextjs" && framework.hasAppDir
        ? path.join(cwd, "app", "globals.css")
        : path.join(cwd, "src", "index.css");

    if (
      !fs.existsSync(globalsCssPath) &&
      !fs.existsSync(path.join(cwd, "styles", "globals.css"))
    ) {
      const globalsTemplate = path.join(templatesDir, "globals.css");
      if (fs.existsSync(globalsTemplate)) {
        const dir = path.dirname(globalsCssPath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.copyFileSync(globalsTemplate, globalsCssPath);
        logSuccess(`Created ${path.relative(cwd, globalsCssPath)}`);
        logInfo(
          "Don't forget to import this CSS file in your main component/layout!"
        );
      }
    }

    // Create components.json with framework info
    const componentsConfigPath = path.join(cwd, "components.json");
    const componentsConfig = {
      framework: framework.type,
      typescript: framework.hasTypeScript,
      componentsDir: path.relative(cwd, framework.componentsDir),
      components: [],
    };

    if (!fs.existsSync(componentsConfigPath)) {
      fs.writeFileSync(
        componentsConfigPath,
        JSON.stringify(componentsConfig, null, 2)
      );
      logSuccess("Created components.json");
    } else {
      // Update existing config
      const existingConfig = JSON.parse(
        fs.readFileSync(componentsConfigPath, "utf8")
      );
      const updatedConfig = { ...existingConfig, ...componentsConfig };
      fs.writeFileSync(
        componentsConfigPath,
        JSON.stringify(updatedConfig, null, 2)
      );
      logSuccess("Updated components.json");
    }

    // Create index file for easier imports
    const indexPath = path.join(
      framework.componentsDir,
      `index.${framework.hasTypeScript ? "ts" : "js"}`
    );
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, "// Export all components from this file\n");
      logSuccess("Created components index file");
    }

    // Install dependencies
    logInfo("Installing dependencies...");
    const dependencies = ["clsx", "framer-motion"];
    const devDependencies = ["tailwindcss", "autoprefixer", "postcss"];

    if (framework.hasTypeScript) {
      devDependencies.push("@types/react", "@types/react-dom");
    }

    try {
      execSync(`npm install ${dependencies.join(" ")}`, { stdio: "inherit" });
      execSync(`npm install -D ${devDependencies.join(" ")}`, {
        stdio: "inherit",
      });
      logSuccess("Dependencies installed successfully.");
    } catch (error) {
      logWarning(
        "Failed to install some dependencies. Please install them manually:"
      );
      logWarning(`npm install ${dependencies.join(" ")}`);
      logWarning(`npm install -D ${devDependencies.join(" ")}`);
    }

    // Show available components
    const availableComponents = getAvailableComponents();
    if (availableComponents.length > 0) {
      logSuccess("Setup complete! Available components:");
      availableComponents.forEach((comp) => {
        console.log(`  - ${comp}`);
      });
      logInfo(
        `\nAdd components with: npx @elixir-labs/ui add <component-name>`
      );
    } else {
      logSuccess("Setup complete!");
    }
  } catch (err) {
    logError(err.message);
    process.exit(1);
  }
}

/**
 * Creates a Tailwind config based on the detected framework
 * @param {Object} framework - Framework information
 * @returns {string} Tailwind config content
 */
function createTailwindConfig(framework) {
  let contentPaths = [];

  switch (framework.type) {
    case "nextjs":
      if (framework.hasAppDir) {
        contentPaths = [
          "./app/**/*.{js,ts,jsx,tsx,mdx}",
          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/**/*.{js,ts,jsx,tsx,mdx}",
        ];
      } else {
        contentPaths = [
          "./pages/**/*.{js,ts,jsx,tsx}",
          "./components/**/*.{js,ts,jsx,tsx}",
          "./src/**/*.{js,ts,jsx,tsx}",
        ];
      }
      break;
    case "vite":
    case "create-react-app":
      contentPaths = [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./public/index.html",
      ];
      break;
    default:
      contentPaths = [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./**/*.{js,ts,jsx,tsx}",
      ];
  }

  return `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ${JSON.stringify(contentPaths, null, 4)},
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
};`;
}

/**
 * Adds a component to the project
 * @param {string} componentName - Name of the component to add
 */
function addComponent(componentName) {
  try {
    if (!componentName) {
      throw new Error("Please provide a component name.");
    }

    // Check if components.json exists
    const componentsConfigPath = path.join(cwd, "components.json");
    if (!fs.existsSync(componentsConfigPath)) {
      throw new Error(
        "components.json not found. Please run 'npx @elixir-labs/ui init' first."
      );
    }

    // Read components config
    const componentsConfig = JSON.parse(
      fs.readFileSync(componentsConfigPath, "utf8")
    );
    const componentsDir = path.join(
      cwd,
      componentsConfig.componentsDir || "components/ui"
    );
    const isTypeScript = componentsConfig.typescript || false;
    const fileExtension = isTypeScript ? "tsx" : "jsx";

    // Ensure components directory exists
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
      logSuccess(
        `Created components directory: ${path.relative(cwd, componentsDir)}`
      );
    }

    // Capitalize the component name
    const capitalizedComponentName =
      componentName.charAt(0).toUpperCase() + componentName.slice(1);

    // Check if component already exists
    const componentPath = path.join(
      componentsDir,
      `${capitalizedComponentName}.${fileExtension}`
    );
    if (fs.existsSync(componentPath)) {
      throw new Error(
        `${capitalizedComponentName} component already exists at ${path.relative(
          cwd,
          componentPath
        )}`
      );
    }

    // Find the appropriate template (prefer TypeScript if project uses TypeScript)
    const templateExtension = isTypeScript ? "tsx" : "jsx";
    const templatePath = path.join(
      templatesDir,
      `${componentName.toLowerCase()}.${templateExtension}`
    );
    const fallbackTemplatePath = path.join(
      templatesDir,
      `${componentName.toLowerCase()}.jsx`
    );
    const defaultTemplatePath = path.join(
      templatesDir,
      `general.${templateExtension}`
    );
    const fallbackDefaultTemplatePath = path.join(templatesDir, "general.jsx");

    let template;
    let templateUsed;

    if (fs.existsSync(templatePath)) {
      template = fs.readFileSync(templatePath, "utf8");
      templateUsed = `${componentName.toLowerCase()}.${templateExtension}`;
    } else if (fs.existsSync(fallbackTemplatePath)) {
      template = fs.readFileSync(fallbackTemplatePath, "utf8");
      templateUsed = `${componentName.toLowerCase()}.jsx`;
      if (isTypeScript) {
        logWarning(
          `Using JSX template for TypeScript project. Consider creating a ${componentName.toLowerCase()}.tsx template.`
        );
      }
    } else if (fs.existsSync(defaultTemplatePath)) {
      template = fs.readFileSync(defaultTemplatePath, "utf8");
      templateUsed = `general.${templateExtension}`;
      logWarning(
        `No specific template found for '${componentName}'. Using general template.`
      );
    } else if (fs.existsSync(fallbackDefaultTemplatePath)) {
      template = fs.readFileSync(fallbackDefaultTemplatePath, "utf8");
      templateUsed = "general.jsx";
      logWarning(
        `No specific template found for '${componentName}'. Using general JSX template.`
      );
    } else {
      throw new Error(
        `No template found for component '${componentName}' and no general template available.`
      );
    }

    // Replace placeholder with actual component name
    const componentCode = template.replace(
      /COMPONENT_NAME/g,
      capitalizedComponentName
    );

    // Write the component file
    fs.writeFileSync(componentPath, componentCode);
    logSuccess(
      `${capitalizedComponentName} component created at ${path.relative(
        cwd,
        componentPath
      )}`
    );

    // Update components.json
    if (!componentsConfig.components.includes(capitalizedComponentName)) {
      componentsConfig.components.push(capitalizedComponentName);
      fs.writeFileSync(
        componentsConfigPath,
        JSON.stringify(componentsConfig, null, 2)
      );
      logSuccess(`Updated components.json`);
    }

    // Update index file
    const indexExtension = isTypeScript ? "ts" : "js";
    const indexPath = path.join(componentsDir, `index.${indexExtension}`);
    if (fs.existsSync(indexPath)) {
      const indexContent = fs.readFileSync(indexPath, "utf8");
      const exportLine = `export { ${capitalizedComponentName} } from './${capitalizedComponentName}';`;

      if (!indexContent.includes(exportLine)) {
        const newContent = indexContent.trim() + "\n" + exportLine + "\n";
        fs.writeFileSync(indexPath, newContent);
        logSuccess(
          `Updated index.${indexExtension} with ${capitalizedComponentName} export`
        );
      }
    }

    // Show usage example
    logInfo(`\nUsage example:`);
    console.log(
      chalk.gray(
        `import { ${capitalizedComponentName} } from '${path.relative(
          cwd,
          componentsDir
        )}';`
      )
    );
    console.log(chalk.gray(`// or`));
    console.log(
      chalk.gray(
        `import { ${capitalizedComponentName} } from '${path
          .relative(cwd, indexPath)
          .replace(/\.(js|ts)$/, "")}';`
      )
    );
  } catch (err) {
    logError(err.message);
    process.exit(1);
  }
}

/**
 * Lists all available components
 */
function listComponents() {
  try {
    const availableComponents = getAvailableComponents();
    const componentsConfigPath = path.join(cwd, "components.json");

    console.log(chalk.bold("\n📦 Available Components:"));
    if (availableComponents.length === 0) {
      console.log(chalk.gray("  No components available"));
    } else {
      availableComponents.forEach((comp) => {
        console.log(chalk.green(`  ✓ ${comp}`));
      });
    }

    if (fs.existsSync(componentsConfigPath)) {
      const componentsConfig = JSON.parse(
        fs.readFileSync(componentsConfigPath, "utf8")
      );
      console.log(chalk.bold("\n🏗️  Installed Components:"));
      if (
        componentsConfig.components &&
        componentsConfig.components.length > 0
      ) {
        componentsConfig.components.forEach((comp) => {
          console.log(chalk.blue(`  ✓ ${comp}`));
        });
      } else {
        console.log(chalk.gray("  No components installed"));
      }
    }

    console.log(chalk.bold("\n💡 Usage:"));
    console.log(chalk.gray("  npx @elixir-labs/ui add <component-name>"));
    console.log(chalk.gray("  npx @elixir-labs/ui init"));
  } catch (err) {
    logError(err.message);
  }
}

// CLI Setup
const program = new Command();

program
  .name("@elixir-labs/ui")
  .description("Elixir UI - Modern Components CLI")
  .version(version);

program
  .command("init")
  .description("Initialize Elixir UI in your project")
  .action(() => {
    init();
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component>", "component name to add")
  .action((componentName) => {
    addComponent(componentName);
  });

program
  .command("list")
  .alias("ls")
  .description("List all available components")
  .action(() => {
    listComponents();
  });

program.parse(process.argv);
