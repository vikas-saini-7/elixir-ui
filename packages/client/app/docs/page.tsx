"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const DocsPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Elixir UI Documentation</DocsHeading>
      <DocsPara>
        Welcome to the comprehensive documentation for Elixir UI - a modern,
        fast, and lightweight component library for React applications. Get
        started quickly with beautiful, accessible components.
      </DocsPara>

      <DocsHeading level={2}>Quick Start</DocsHeading>
      <DocsPara>
        Get up and running in minutes with these simple steps:
      </DocsPara>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
          <div className="text-2xl mb-3">1️⃣</div>
          <h3 className="font-semibold text-lg mb-2">Install</h3>
          <DocsParaFaded>Initialize Elixir UI in your project</DocsParaFaded>
          <CodeBlock>npx @elixir-labs/ui init</CodeBlock>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
          <div className="text-2xl mb-3">2️⃣</div>
          <h3 className="font-semibold text-lg mb-2">Add Components</h3>
          <DocsParaFaded>Add the components you need</DocsParaFaded>
          <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors">
          <div className="text-2xl mb-3">3️⃣</div>
          <h3 className="font-semibold text-lg mb-2">Use & Customize</h3>
          <DocsParaFaded>Import and use in your components</DocsParaFaded>
          <CodeBlock codeLanguage="jsx">
            {`import { Button } from "@/components/ui/button";

<Button>Click me</Button>`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>Explore the Documentation</DocsHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <a
          href="/docs/introduction"
          className="block border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
              Getting Started
            </h3>
            <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
              →
            </span>
          </div>
          <DocsParaFaded>
            Learn about Elixir UI&apos;s philosophy, features, and how to get
            started with your first component.
          </DocsParaFaded>
          <div className="mt-4 text-sm text-blue-400">
            Introduction • Installation • Quick Start
          </div>
        </a>

        <a
          href="/docs/components/button"
          className="block border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
              Components
            </h3>
            <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
              →
            </span>
          </div>
          <DocsParaFaded>
            Explore our collection of beautiful, accessible components with live
            examples and source code.
          </DocsParaFaded>
          <div className="mt-4 text-sm text-blue-400">
            Button • Card • Alert • Input • Avatar • Badge
          </div>
        </a>

        <a
          href="/docs/installation/nextjs"
          className="block border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
              Framework Guides
            </h3>
            <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
              →
            </span>
          </div>
          <DocsParaFaded>
            Step-by-step installation guides for popular React frameworks and
            build tools.
          </DocsParaFaded>
          <div className="mt-4 text-sm text-blue-400">
            Next.js • Vite • Create React App
          </div>
        </a>

        <a
          href="/docs/templates"
          className="block border border-gray-700 rounded-lg p-6 hover:border-gray-600 transition-colors group"
        >
          <div className="flex items-start justify-between mb-3">
            <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">
              Templates
            </h3>
            <span className="text-gray-400 group-hover:text-blue-400 transition-colors">
              →
            </span>
          </div>
          <DocsParaFaded>
            Pre-built page templates and component combinations to accelerate
            your development.
          </DocsParaFaded>
          <div className="mt-4 text-sm text-blue-400">
            Dashboard • Auth • Landing • E-commerce
          </div>
        </a>
      </div>

      <DocsHeading level={2}>Available Components</DocsHeading>
      <DocsPara>
        All components are designed with accessibility, performance, and
        customization in mind:
      </DocsPara>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-6">
        <a
          href="/docs/components/alert"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-red-600/20 rounded flex items-center justify-center">
            <span className="text-red-400">⚠️</span>
          </div>
          <span className="font-medium">Alert</span>
        </a>

        <a
          href="/docs/components/avatar"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-blue-600/20 rounded flex items-center justify-center">
            <span className="text-blue-400">👤</span>
          </div>
          <span className="font-medium">Avatar</span>
        </a>

        <a
          href="/docs/components/badge"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-green-600/20 rounded flex items-center justify-center">
            <span className="text-green-400">🏷️</span>
          </div>
          <span className="font-medium">Badge</span>
        </a>

        <a
          href="/docs/components/button"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-purple-600/20 rounded flex items-center justify-center">
            <span className="text-purple-400">🔘</span>
          </div>
          <span className="font-medium">Button</span>
        </a>

        <a
          href="/docs/components/card"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-orange-600/20 rounded flex items-center justify-center">
            <span className="text-orange-400">🗃️</span>
          </div>
          <span className="font-medium">Card</span>
        </a>

        <a
          href="/docs/components/input"
          className="flex items-center gap-3 p-3 border border-gray-700 rounded-lg hover:border-gray-600 transition-colors"
        >
          <div className="w-8 h-8 bg-cyan-600/20 rounded flex items-center justify-center">
            <span className="text-cyan-400">📝</span>
          </div>
          <span className="font-medium">Input</span>
        </a>
      </div>

      <DocsHeading level={2}>Why Elixir UI?</DocsHeading>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Copy & Paste</h4>
              <DocsParaFaded>
                No heavy npm packages. Get the source code directly in your
                project for full control.
              </DocsParaFaded>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Fully Customizable</h4>
              <DocsParaFaded>
                Modify styles, behavior, and structure to match your exact
                requirements.
              </DocsParaFaded>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">TypeScript Ready</h4>
              <DocsParaFaded>
                Built with TypeScript for excellent developer experience and
                type safety.
              </DocsParaFaded>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Accessible by Default</h4>
              <DocsParaFaded>
                All components follow WAI-ARIA guidelines and accessibility best
                practices.
              </DocsParaFaded>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Modern Styling</h4>
              <DocsParaFaded>
                Built with Tailwind CSS for consistent, maintainable, and
                responsive designs.
              </DocsParaFaded>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-600/20 rounded flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-green-400 text-sm">✓</span>
            </div>
            <div>
              <h4 className="font-medium mb-1">Framework Agnostic</h4>
              <DocsParaFaded>
                Works with Next.js, Vite, Create React App, and any React setup.
              </DocsParaFaded>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 p-6 border border-blue-700 bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-3">
          🚀 Ready to get started?
        </h4>
        <DocsPara>
          Jump into our{" "}
          <a
            href="/docs/introduction"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            introduction guide
          </a>{" "}
          to learn more about Elixir UI, or go straight to the{" "}
          <a
            href="/docs/installation"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            installation guide
          </a>{" "}
          to set up your first project.
        </DocsPara>
        <div className="flex gap-4 mt-4">
          <a
            href="/docs/introduction"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
          <a
            href="/docs/components/button"
            className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-300 rounded-md hover:border-blue-500 transition-colors"
          >
            Browse Components
          </a>
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
