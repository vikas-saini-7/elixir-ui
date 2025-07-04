"use client";
import React, { useState } from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

// Demo Input Component
const DemoInput = React.forwardRef<HTMLInputElement, any>(
  ({ className = "", type = "text", ...props }, ref) => {
    return (
      <input
        type={type}
        className={`flex h-10 w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-gray-100 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
DemoInput.displayName = "DemoInput";

const InputPage: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="max-w-4xl">
      <DocsHeading>Input</DocsHeading>
      <DocsPara>
        A versatile input component for collecting user data. Supports various
        input types, states, and styling options for forms and user interfaces.
      </DocsPara>

      <DocsHeading level={2}>Installation</DocsHeading>
      <DocsPara>Add the Input component to your project:</DocsPara>
      <CodeBlock>npx @elixir-labs/ui add input</CodeBlock>

      <DocsHeading level={2}>Usage</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import { Input } from "@/components/ui/input";

export default function MyComponent() {
  return <Input placeholder="Enter your name" />;
}`}
      </CodeBlock>

      <DocsHeading level={2}>Examples</DocsHeading>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Basic Input</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm">
              <DemoInput placeholder="Enter your name" />
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Input placeholder="Enter your name" />`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Input Types</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <DemoInput type="email" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <DemoInput type="password" placeholder="••••••••" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Number
                </label>
                <DemoInput type="number" placeholder="123" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Date
                </label>
                <DemoInput type="date" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Time
                </label>
                <DemoInput type="time" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tel
                </label>
                <DemoInput type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Input type="email" placeholder="john@example.com" />
<Input type="password" placeholder="••••••••" />
<Input type="number" placeholder="123" />
<Input type="date" />
<Input type="time" />
<Input type="tel" placeholder="+1 (555) 000-0000" />`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Controlled Input</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Controlled Input
                </label>
                <DemoInput
                  value={inputValue}
                  onChange={(e: any) => setInputValue(e.target.value)}
                  placeholder="Type something..."
                />
              </div>
              <div className="text-sm text-gray-400">
                Value: {inputValue || "(empty)"}
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`const [inputValue, setInputValue] = useState("");

<Input
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  placeholder="Type something..."
/>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Input with Labels</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <DemoInput
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e: any) => setEmail(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-300"
                >
                  Password
                </label>
                <DemoInput
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e: any) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<div className="space-y-2">
  <label htmlFor="email" className="block text-sm font-medium">
    Email Address
  </label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
  />
</div>

<div className="space-y-2">
  <label htmlFor="password" className="block text-sm font-medium">
    Password
  </label>
  <Input
    id="password"
    type="password"
    placeholder="Enter your password"
  />
</div>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Input States</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Normal Input
                </label>
                <DemoInput placeholder="Normal state" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Disabled Input
                </label>
                <DemoInput placeholder="Disabled state" disabled />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Readonly Input
                </label>
                <DemoInput value="Readonly value" readOnly />
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Input placeholder="Normal state" />
<Input placeholder="Disabled state" disabled />
<Input value="Readonly value" readOnly />`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Input with Validation</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Valid Input
                </label>
                <DemoInput
                  className="border-green-600 focus-visible:ring-green-500"
                  placeholder="Valid input"
                  defaultValue="valid@example.com"
                />
                <p className="text-sm text-green-400 mt-1">✓ Email is valid</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Invalid Input
                </label>
                <DemoInput
                  className="border-red-600 focus-visible:ring-red-500"
                  placeholder="Invalid input"
                  defaultValue="invalid-email"
                />
                <p className="text-sm text-red-400 mt-1">
                  ✗ Please enter a valid email
                </p>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`// Valid input
<Input
  className="border-green-600 focus-visible:ring-green-500"
  placeholder="Valid input"
  defaultValue="valid@example.com"
/>

// Invalid input
<Input
  className="border-red-600 focus-visible:ring-red-500"
  placeholder="Invalid input"
  defaultValue="invalid-email"
/>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Input Sizes</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Small Input
                </label>
                <DemoInput className="h-8 text-xs" placeholder="Small input" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Default Input
                </label>
                <DemoInput placeholder="Default input" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Large Input
                </label>
                <DemoInput
                  className="h-12 text-base"
                  placeholder="Large input"
                />
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Input className="h-8 text-xs" placeholder="Small input" />
<Input placeholder="Default input" />
<Input className="h-12 text-base" placeholder="Large input" />`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>API Reference</DocsHeading>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-700">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-gray-700 px-4 py-2 text-left">
                Prop
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Type
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Default
              </th>
              <th className="border border-gray-700 px-4 py-2 text-left">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                type
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                string
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                &quot;text&quot;
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                HTML input type
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                placeholder
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                string
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Placeholder text
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                value
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                string
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Input value (controlled)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                defaultValue
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                string
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Default value (uncontrolled)
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                onChange
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                function
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Change event handler
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                disabled
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                boolean
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                false
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Whether input is disabled
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                readOnly
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                boolean
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                false
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Whether input is read-only
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                className
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                string
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                Additional CSS classes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsHeading level={2}>Source Code</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import React from 'react';
import { clsx } from 'clsx';

const Input = React.forwardRef(({ className, type = 'text', ...props }, ref) => {
  return (
    <input
      type={type}
      className={clsx(
        'flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };`}
      </CodeBlock>

      <DocsHeading level={2}>Accessibility</DocsHeading>
      <DocsPara>
        The Input component follows accessibility best practices:
      </DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>Uses semantic HTML input elements</li>
        <li>Supports proper labeling with htmlFor/id associations</li>
        <li>Includes focus-visible styles for keyboard navigation</li>
        <li>Handles disabled and readonly states appropriately</li>
        <li>Works with screen readers and assistive technologies</li>
        <li>Supports all standard HTML input attributes</li>
      </ul>

      <DocsHeading level={2}>Best Practices</DocsHeading>
      <div className="space-y-4">
        <div className="border border-green-700 bg-green-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-300 mb-2">✅ Do</h4>
          <ul className="space-y-1 text-green-200 text-sm">
            <li>Always provide descriptive labels for inputs</li>
            <li>Use appropriate input types (email, tel, number, etc.)</li>
            <li>Provide clear placeholder text when helpful</li>
            <li>Include validation feedback for form inputs</li>
            <li>Use controlled components for form state management</li>
          </ul>
        </div>

        <div className="border border-red-700 bg-red-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-red-300 mb-2">❌ Don&apos;t</h4>
          <ul className="space-y-1 text-red-200 text-sm">
            <li>Use placeholder text as a replacement for labels</li>
            <li>Make inputs too small or difficult to click</li>
            <li>Forget to handle loading and error states</li>
            <li>Use generic input types when specific ones are available</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 border border-blue-700 bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tip</h4>
        <DocsParaFaded>
          Consider using a form library like React Hook Form or Formik for
          complex forms with validation. The Input component works seamlessly
          with these libraries.
        </DocsParaFaded>
      </div>
    </div>
  );
};

export default InputPage;
