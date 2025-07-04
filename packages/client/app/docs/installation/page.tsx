"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const InstallationPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Installation</DocsHeading>
      <DocsPara>
        Get started with Elixir UI by installing it in your existing React
        project. We support all popular React frameworks including Next.js,
        Vite, and Create React App.
      </DocsPara>

      <DocsHeading level={2}>Quick Installation</DocsHeading>
      <DocsPara>The fastest way to get started is using our CLI tool:</DocsPara>

      <div className="space-y-4">
        <div>
          <DocsParaFaded>
            Run the init command in your project root:
          </DocsParaFaded>
          <CodeBlock>npx @elixir-labs/ui init</CodeBlock>
        </div>

        <div>
          <DocsParaFaded>This will:</DocsParaFaded>
          <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4">
            <li>
              Install required dependencies (clsx, framer-motion, tailwindcss)
            </li>
            <li>Create a components.json configuration file</li>
            <li>Set up your components directory structure</li>
            <li>Add necessary Tailwind CSS configuration</li>
          </ul>
        </div>
      </div>

      <DocsHeading level={2}>Framework-Specific Setup</DocsHeading>
      <DocsPara>
        Choose your framework for detailed installation instructions:
      </DocsPara>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
        <a
          href="/docs/installation/nextjs"
          className="block p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2">Next.js</h3>
          <p className="text-gray-400 text-sm">
            Complete setup guide for Next.js applications
          </p>
        </a>

        <a
          href="/docs/installation/vite"
          className="block p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2">Vite</h3>
          <p className="text-gray-400 text-sm">
            Setup instructions for Vite projects
          </p>
        </a>

        <a
          href="/docs/installation/reactjs"
          className="block p-4 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <h3 className="font-semibold text-lg mb-2">Create React App</h3>
          <p className="text-gray-400 text-sm">
            Installation guide for CRA projects
          </p>
        </a>
      </div>

      <DocsHeading level={2}>Manual Installation</DocsHeading>
      <DocsPara>
        If you prefer to set things up manually, follow these steps:
      </DocsPara>

      <div className="space-y-6">
        <div>
          <DocsHeading level={3}>Step 1: Install Dependencies</DocsHeading>
          <CodeBlock>npm install clsx framer-motion tailwindcss</CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Step 2: Create components.json</DocsHeading>
          <DocsParaFaded>
            Create a components.json file in your project root:
          </DocsParaFaded>
          <CodeBlock codeLanguage="json">
            {`{
  "style": "default",
  "rsc": false,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/globals.css",
    "baseColor": "slate"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Step 3: Configure Tailwind CSS</DocsHeading>
          <DocsParaFaded>
            Add the following to your tailwind.config.js:
          </DocsParaFaded>
          <CodeBlock codeLanguage="javascript">
            {`module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
    },
  },
  plugins: [],
}`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Step 4: Add CSS Variables</DocsHeading>
          <DocsParaFaded>
            Add these CSS variables to your globals.css:
          </DocsParaFaded>
          <CodeBlock codeLanguage="css">
            {`@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>Adding Components</DocsHeading>
      <DocsPara>
        Once you&apos;ve completed the installation, you can start adding
        components:
      </DocsPara>

      <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>

      <DocsPara>
        This will add the Button component to your project. You can then import
        and use it:
      </DocsPara>

      <CodeBlock codeLanguage="jsx">
        {`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>Click me</Button>;
}`}
      </CodeBlock>

      <DocsHeading level={2}>Next Steps</DocsHeading>
      <DocsPara>Now that you have Elixir UI installed, you can:</DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>
          Browse the{" "}
          <a
            href="/docs/components/button"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            component library
          </a>
        </li>
        <li>
          Learn about{" "}
          <a
            href="/docs/introduction"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            customization options
          </a>
        </li>
        <li>
          Check out example{" "}
          <a
            href="/docs/templates"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            templates
          </a>
        </li>
      </ul>
    </div>
  );
};

export default InstallationPage;
