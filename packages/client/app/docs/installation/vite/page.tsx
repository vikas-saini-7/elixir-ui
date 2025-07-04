"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const ViteInstallationPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Vite Installation</DocsHeading>
      <DocsPara>
        Setting up Elixir UI in a Vite React project is quick and efficient.
        This guide covers both new and existing Vite projects.
      </DocsPara>

      <DocsHeading level={2}>New Vite Project</DocsHeading>
      <DocsPara>
        If you&apos;re starting fresh, create a new Vite React project:
      </DocsPara>

      <CodeBlock>
        npm create vite@latest my-app -- --template react-ts
      </CodeBlock>
      <CodeBlock>cd my-app</CodeBlock>
      <CodeBlock>npm install</CodeBlock>

      <DocsHeading level={2}>Install Tailwind CSS</DocsHeading>
      <DocsPara>
        Vite doesn&apos;t include Tailwind CSS by default, so install it first:
      </DocsPara>

      <CodeBlock>npm install -D tailwindcss postcss autoprefixer</CodeBlock>
      <CodeBlock>npx tailwindcss init -p</CodeBlock>

      <DocsHeading level={2}>Configure Tailwind CSS</DocsHeading>
      <DocsParaFaded>Update your tailwind.config.js:</DocsParaFaded>
      <CodeBlock codeLanguage="javascript">
        {`/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}`}
      </CodeBlock>

      <DocsParaFaded>
        Add Tailwind directives to your src/index.css:
      </DocsParaFaded>
      <CodeBlock codeLanguage="css">
        {`@tailwind base;
@tailwind components;
@tailwind utilities;`}
      </CodeBlock>

      <DocsHeading level={2}>Install Elixir UI</DocsHeading>
      <DocsPara>Now install Elixir UI in your Vite project:</DocsPara>

      <CodeBlock>npx @elixir-labs/ui init</CodeBlock>

      <DocsParaFaded>
        The init command will automatically configure Vite-specific settings:
      </DocsParaFaded>

      <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-6">
        <li>Install required dependencies (clsx, framer-motion)</li>
        <li>Update your tailwind.config.js</li>
        <li>Configure Vite path aliases</li>
        <li>Set up the components directory structure</li>
        <li>Add CSS variables to your stylesheet</li>
      </ul>

      <DocsHeading level={2}>Vite Configuration</DocsHeading>
      <DocsPara>
        The init command will update your vite.config.ts to include path
        aliases:
      </DocsPara>

      <CodeBlock codeLanguage="typescript">
        {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})`}
      </CodeBlock>

      <DocsHeading level={3}>Updated Tailwind Config</DocsHeading>
      <DocsParaFaded>
        Your tailwind.config.js will be updated with Elixir UI theme
        configuration:
      </DocsParaFaded>
      <CodeBlock codeLanguage="javascript">
        {`/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
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
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}`}
      </CodeBlock>

      <DocsHeading level={3}>TypeScript Configuration</DocsHeading>
      <DocsParaFaded>
        Your tsconfig.json will include path aliases:
      </DocsParaFaded>
      <CodeBlock codeLanguage="json">
        {`{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`}
      </CodeBlock>

      <DocsHeading level={2}>Adding Your First Component</DocsHeading>
      <DocsPara>Add a component to your Vite project:</DocsPara>

      <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>

      <DocsParaFaded>
        Update your src/App.tsx to use the component:
      </DocsParaFaded>
      <CodeBlock codeLanguage="tsx">
        {`import { Button } from "@/components/ui/button";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-foreground">
          Vite + Elixir UI
        </h1>
        
        <p className="text-muted-foreground">
          Fast, modern React development with beautiful components
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="secondary">Learn More</Button>
          <Button variant="outline">GitHub</Button>
        </div>
      </div>
    </div>
  );
}

export default App;`}
      </CodeBlock>

      <DocsHeading level={2}>Development Server</DocsHeading>
      <DocsPara>Start your development server to see your changes:</DocsPara>

      <CodeBlock>npm run dev</CodeBlock>

      <DocsParaFaded>
        Your Vite development server will start, typically on
        http://localhost:5173
      </DocsParaFaded>

      <DocsHeading level={2}>Building for Production</DocsHeading>
      <DocsPara>Build your project for production:</DocsPara>

      <CodeBlock>npm run build</CodeBlock>

      <DocsParaFaded>
        Vite will create an optimized production build in the dist/ directory.
      </DocsParaFaded>

      <DocsHeading level={2}>Performance Tips</DocsHeading>
      <DocsPara>Optimize your Vite + Elixir UI setup:</DocsPara>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Tree Shaking</h4>
          <DocsParaFaded>
            Import only the components you need to keep your bundle size small.
          </DocsParaFaded>
          <CodeBlock codeLanguage="tsx">
            {`// Good - specific imports
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Avoid - importing everything
import * as UI from "@/components/ui";`}
          </CodeBlock>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Code Splitting</h4>
          <DocsParaFaded>
            Use React.lazy() for code splitting larger components:
          </DocsParaFaded>
          <CodeBlock codeLanguage="tsx">
            {`import { lazy, Suspense } from 'react';

const HeavyComponent = lazy(() => import('./HeavyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HeavyComponent />
    </Suspense>
  );
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>Troubleshooting</DocsHeading>
      <DocsPara>Common Vite-specific issues:</DocsPara>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Path alias not working</h4>
          <DocsParaFaded>
            Ensure both vite.config.ts and tsconfig.json have the correct path
            aliases configured.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">CSS not loading</h4>
          <DocsParaFaded>
            Make sure you&apos;ve imported your CSS file in main.tsx or App.tsx,
            and Tailwind directives are in your CSS.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Fast Refresh issues</h4>
          <DocsParaFaded>
            If components aren&apos;t updating, try restarting the dev server or
            clearing the cache.
          </DocsParaFaded>
        </div>
      </div>

      <DocsHeading level={2}>Next Steps</DocsHeading>
      <DocsPara>
        Your Vite project is ready! Start exploring components and building your
        application.
      </DocsPara>

      <div className="flex gap-4 mt-6">
        <a
          href="/docs/components/button"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Browse Components
        </a>
        <a
          href="/docs/templates"
          className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 transition-colors"
        >
          View Templates
        </a>
      </div>
    </div>
  );
};

export default ViteInstallationPage;
