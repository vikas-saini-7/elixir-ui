"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const NextJSInstallationPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Next.js Installation</DocsHeading>
      <DocsPara>
        Setting up Elixir UI in a Next.js project is straightforward. Follow
        this guide for both new and existing Next.js applications.
      </DocsPara>

      <DocsHeading level={2}>New Next.js Project</DocsHeading>
      <DocsPara>
        If you&apos;re starting a new project, create a Next.js app first:
      </DocsPara>

      <CodeBlock>
        npx create-next-app@latest my-app --typescript --tailwind --app
      </CodeBlock>
      <CodeBlock>cd my-app</CodeBlock>

      <DocsHeading level={2}>Install Elixir UI</DocsHeading>
      <DocsPara>
        Run the initialization command in your Next.js project:
      </DocsPara>

      <CodeBlock>npx @elixir-labs/ui init</CodeBlock>

      <DocsParaFaded>
        This command will automatically detect Next.js and configure everything
        for you:
      </DocsParaFaded>

      <ul className="list-disc list-inside space-y-1 text-gray-300 ml-4 mb-6">
        <li>Install required dependencies</li>
        <li>Update your tailwind.config.ts</li>
        <li>Configure path aliases in tsconfig.json</li>
        <li>Set up the components directory</li>
      </ul>

      <DocsHeading level={2}>Configuration Details</DocsHeading>
      <DocsPara>
        Here&apos;s what the init command configures automatically:
      </DocsPara>

      <DocsHeading level={3}>tailwind.config.ts</DocsHeading>
      <CodeBlock codeLanguage="typescript">
        {`import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
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
} satisfies Config

export default config`}
      </CodeBlock>

      <DocsHeading level={3}>tsconfig.json Paths</DocsHeading>
      <DocsParaFaded>
        The init command updates your tsconfig.json with path aliases:
      </DocsParaFaded>
      <CodeBlock codeLanguage="json">
        {`{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"],
      "@/components/*": ["./components/*"],
      "@/lib/*": ["./lib/*"]
    }
  }
}`}
      </CodeBlock>

      <DocsHeading level={2}>Adding Your First Component</DocsHeading>
      <DocsPara>Now you can add components to your Next.js project:</DocsPara>

      <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>

      <DocsParaFaded>Use it in your page or component:</DocsParaFaded>
      <CodeBlock codeLanguage="tsx">
        {`// app/page.tsx
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Welcome to Next.js with Elixir UI
        </h1>
        
        <div className="flex gap-4 justify-center">
          <Button>Primary Button</Button>
          <Button variant="secondary">Secondary Button</Button>
          <Button variant="outline">Outline Button</Button>
        </div>
      </div>
    </main>
  );
}`}
      </CodeBlock>

      <DocsHeading level={2}>App Router vs Pages Router</DocsHeading>
      <DocsPara>
        Elixir UI works with both Next.js App Router and Pages Router. The
        installation is identical, but import paths may differ slightly:
      </DocsPara>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">App Router</h4>
          <CodeBlock codeLanguage="tsx">
            {`// app/page.tsx
import { Button } from "@/components/ui/button";

export default function Page() {
  return <Button>Click me</Button>;
}`}
          </CodeBlock>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Pages Router</h4>
          <CodeBlock codeLanguage="tsx">
            {`// pages/index.tsx
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return <Button>Click me</Button>;
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>Server Components</DocsHeading>
      <DocsPara>
        All Elixir UI components are compatible with React Server Components by
        default. If you need client-side interactivity, add the &quot;use
        client&quot; directive:
      </DocsPara>

      <CodeBlock codeLanguage="tsx">
        {`"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function InteractiveComponent() {
  const [count, setCount] = useState(0);
  
  return (
    <Button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </Button>
  );
}`}
      </CodeBlock>

      <DocsHeading level={2}>Troubleshooting</DocsHeading>
      <DocsPara>Common issues and solutions:</DocsPara>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Module not found errors</h4>
          <DocsParaFaded>
            Make sure your tsconfig.json includes the proper path aliases and
            restart your dev server.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Styling issues</h4>
          <DocsParaFaded>
            Ensure Tailwind CSS is properly configured and your CSS variables
            are included in globals.css.
          </DocsParaFaded>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">TypeScript errors</h4>
          <DocsParaFaded>
            Run `npm run build` to check for TypeScript errors and ensure all
            dependencies are installed.
          </DocsParaFaded>
        </div>
      </div>

      <DocsHeading level={2}>Next Steps</DocsHeading>
      <DocsPara>
        Your Next.js project is now ready to use Elixir UI components. Explore
        our component library and start building beautiful interfaces!
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

export default NextJSInstallationPage;
