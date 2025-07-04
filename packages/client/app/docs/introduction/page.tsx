"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const IntroductionPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Introduction</DocsHeading>
      <DocsPara>
        Elixir UI is a modern, fast, and lightweight component library for React
        applications. Built with Tailwind CSS and designed for speed, it
        provides beautiful, accessible components that you can copy and paste
        into your apps.
      </DocsPara>

      <DocsHeading level={2}>Features</DocsHeading>
      <div className="mb-6">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            🚀 <strong>Fast</strong> - Optimized for performance and quick
            integration
          </li>
          <li>
            🎨 <strong>Modern</strong> - Contemporary design with Tailwind CSS
          </li>
          <li>
            ♿ <strong>Accessible</strong> - Built with accessibility in mind
          </li>
          <li>
            📦 <strong>Lightweight</strong> - Minimal dependencies, maximum
            efficiency
          </li>
          <li>
            🔧 <strong>Customizable</strong> - Easy to modify and extend
          </li>
          <li>
            📱 <strong>Responsive</strong> - Mobile-first design approach
          </li>
        </ul>
      </div>

      <DocsHeading level={2}>Philosophy</DocsHeading>
      <DocsPara>
        Elixir UI follows the principle of "copy and paste" components. Instead
        of installing a heavy package, you get the source code directly in your
        project, giving you full control over styling and behavior.
      </DocsPara>

      <DocsHeading level={2}>Tech Stack</DocsHeading>
      <div className="mb-6">
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>
            <strong>React</strong> - For building user interfaces
          </li>
          <li>
            <strong>Tailwind CSS</strong> - For styling and design system
          </li>
          <li>
            <strong>Framer Motion</strong> - For smooth animations
          </li>
          <li>
            <strong>clsx</strong> - For conditional class names
          </li>
        </ul>
      </div>

      <DocsHeading level={2}>Quick Start</DocsHeading>
      <DocsPara>Get started with Elixir UI in less than 5 minutes:</DocsPara>

      <div className="space-y-4">
        <div>
          <DocsParaFaded>
            1. Initialize Elixir UI in your project:
          </DocsParaFaded>
          <CodeBlock>npx @elixir-labs/ui init</CodeBlock>
        </div>

        <div>
          <DocsParaFaded>2. Add your first component:</DocsParaFaded>
          <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>
        </div>

        <div>
          <DocsParaFaded>3. Use it in your React component:</DocsParaFaded>
          <CodeBlock codeLanguage="jsx">
            {`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>Click me</Button>;
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>What&apos;s Next?</DocsHeading>
      <DocsPara>
        Ready to dive in? Check out the{" "}
        <a
          href="/docs/installation"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          installation guide
        </a>{" "}
        to set up Elixir UI in your project, or browse our{" "}
        <a
          href="/docs/components/button"
          className="text-blue-400 hover:text-blue-300 underline"
        >
          component library
        </a>{" "}
        to see what&apos;s available.
      </DocsPara>
    </div>
  );
};

export default IntroductionPage;
