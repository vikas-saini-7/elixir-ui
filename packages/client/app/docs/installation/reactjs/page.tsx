"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const ReactJSInstallationPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Create React App Installation</DocsHeading>
      <DocsPara>
        Learn how to integrate Elixir UI with Create React App (CRA) projects.
        This guide covers both TypeScript and JavaScript setups.
      </DocsPara>

      <DocsHeading level={2}>New Create React App Project</DocsHeading>
      <DocsPara>Create a new React app with TypeScript (recommended):</DocsPara>

      <CodeBlock>npx create-react-app my-app --template typescript</CodeBlock>
      <CodeBlock>cd my-app</CodeBlock>

      <DocsParaFaded>Or with JavaScript:</DocsParaFaded>
      <CodeBlock>npx create-react-app my-app</CodeBlock>

      <DocsHeading level={2}>Install Tailwind CSS</DocsHeading>
      <DocsPara>
        Install and configure Tailwind CSS for your CRA project:
      </DocsPara>

      <CodeBlock>npm install -D tailwindcss</CodeBlock>
      <CodeBlock>npx tailwindcss init</CodeBlock>

      <DocsParaFaded>Configure your tailwind.config.js:</DocsParaFaded>
      <CodeBlock codeLanguage="javascript">
        {`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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
      <DocsPara>Install Elixir UI in your CRA project:</DocsPara>

      <CodeBlock>npx @elixir-labs/ui init</CodeBlock>

      <DocsParaFaded>This will configure your CRA project with:</DocsParaFaded>

      <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-6">
        <li>Required dependencies (clsx, framer-motion)</li>
        <li>Updated Tailwind CSS configuration</li>
        <li>Path aliases using CRACO or React App Rewired</li>
        <li>Component directory structure</li>
        <li>CSS variables setup</li>
      </ul>

      <DocsHeading level={2}>Path Aliases Setup</DocsHeading>
      <DocsPara>
        Since CRA doesn&apos;t support path aliases by default, we&apos;ll use
        CRACO:
      </DocsPara>

      <CodeBlock>npm install -D @craco/craco</CodeBlock>

      <DocsParaFaded>
        Create a craco.config.js in your project root:
      </DocsParaFaded>
      <CodeBlock codeLanguage="javascript">
        {`const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
};`}
      </CodeBlock>

      <DocsParaFaded>Update your package.json scripts:</DocsParaFaded>
      <CodeBlock codeLanguage="json">
        {`{
  "scripts": {
    "start": "craco start",
    "build": "craco build",
    "test": "craco test",
    "eject": "react-scripts eject"
  }
}`}
      </CodeBlock>

      <DocsHeading level={3}>TypeScript Configuration</DocsHeading>
      <DocsParaFaded>
        For TypeScript projects, update your tsconfig.json:
      </DocsParaFaded>
      <CodeBlock codeLanguage="json">
        {`{
  "compilerOptions": {
    "target": "es5",
    "lib": [
      "dom",
      "dom.iterable",
      "es6"
    ],
    "allowJs": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noFallthroughCasesInSwitch": true,
    "module": "esnext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  },
  "include": [
    "src"
  ]
}`}
      </CodeBlock>

      <DocsHeading level={2}>Updated Tailwind Configuration</DocsHeading>
      <DocsParaFaded>
        Your tailwind.config.js will be updated with Elixir UI theme:
      </DocsParaFaded>
      <CodeBlock codeLanguage="javascript">
        {`/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
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

      <DocsHeading level={2}>Adding Your First Component</DocsHeading>
      <DocsPara>Add a component to your CRA project:</DocsPara>

      <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>

      <DocsParaFaded>Update your src/App.tsx (or src/App.js):</DocsParaFaded>
      <CodeBlock codeLanguage="tsx">
        {`import React from 'react';
import { Button } from '@/components/ui/button';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="max-w-md mx-auto text-center space-y-6 p-6">
        <h1 className="text-4xl font-bold text-foreground">
          React + Elixir UI
        </h1>
        
        <p className="text-muted-foreground">
          Beautiful, accessible components for your React app
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button>Get Started</Button>
          <Button variant="secondary">Documentation</Button>
          <Button variant="outline">View Source</Button>
        </div>
        
        <div className="grid grid-cols-2 gap-4 mt-8">
          <Button variant="ghost" size="sm">
            Small Ghost
          </Button>
          <Button variant="destructive" size="sm">
            Destructive
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;`}
      </CodeBlock>

      <DocsHeading level={2}>Development and Building</DocsHeading>
      <DocsPara>Start your development server:</DocsPara>

      <CodeBlock>npm start</CodeBlock>

      <DocsParaFaded>
        Your app will be available at http://localhost:3000
      </DocsParaFaded>

      <DocsPara>Build for production:</DocsPara>
      <CodeBlock>npm run build</CodeBlock>

      <DocsHeading level={2}>Alternative: Without CRACO</DocsHeading>
      <DocsPara>
        If you prefer not to use CRACO, you can use relative imports:
      </DocsPara>

      <CodeBlock codeLanguage="tsx">
        {`// Instead of @/components/ui/button
import { Button } from './components/ui/button';

// Or from a deeper component
import { Button } from '../../components/ui/button';`}
      </CodeBlock>

      <DocsParaFaded>
        However, we recommend using CRACO for better import paths and
        development experience.
      </DocsParaFaded>

      <DocsHeading level={2}>Testing Components</DocsHeading>
      <DocsPara>
        Test your Elixir UI components with React Testing Library:
      </DocsPara>

      <CodeBlock codeLanguage="tsx">
        {`import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '@/components/ui/button';

test('renders button with text', () => {
  const handleClick = jest.fn();
  
  render(
    <Button onClick={handleClick}>
      Click me
    </Button>
  );
  
  const button = screen.getByRole('button', { name: /click me/i });
  expect(button).toBeInTheDocument();
  
  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
});`}
      </CodeBlock>

      <DocsHeading level={2}>Troubleshooting</DocsHeading>
      <DocsPara>Common issues with CRA setup:</DocsPara>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">CRACO errors</h4>
          <DocsParaFaded>
            Make sure you&apos;ve updated your package.json scripts to use
            &quot;craco&quot; instead of &quot;react-scripts&quot;.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Path resolution issues</h4>
          <DocsParaFaded>
            Ensure both craco.config.js and tsconfig.json have matching path
            configurations.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Tailwind not working</h4>
          <DocsParaFaded>
            Verify that Tailwind directives are in your src/index.css and the
            file is imported in src/index.tsx.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Build errors</h4>
          <DocsParaFaded>
            Run &quot;npm run build&quot; to check for TypeScript errors and
            ensure all imports are correct.
          </DocsParaFaded>
        </div>
      </div>

      <DocsHeading level={2}>Migration from CRA</DocsHeading>
      <DocsPara>
        Consider migrating to Vite for better performance and development
        experience:
      </DocsPara>

      <div className="border border-gray-700 rounded-lg p-4">
        <DocsParaFaded>
          Vite offers faster builds, better TypeScript support, and simpler
          configuration. Check out our{" "}
          <a
            href="/docs/installation/vite"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            Vite installation guide
          </a>{" "}
          for migration steps.
        </DocsParaFaded>
      </div>

      <DocsHeading level={2}>Next Steps</DocsHeading>
      <DocsPara>
        Your Create React App is now ready with Elixir UI! Start building
        beautiful interfaces.
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

export default ReactJSInstallationPage;
