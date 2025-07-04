"use client";
import React, { useState } from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

// Demo Button Component (inline for demo purposes)
const DemoButton = React.forwardRef<HTMLButtonElement, any>(
  (
    {
      children,
      variant = "default",
      size = "md",
      disabled = false,
      className = "",
      ...props
    },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      destructive: "bg-red-600 text-white hover:bg-red-700",
      outline:
        "border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300",
      secondary: "bg-gray-700 text-gray-100 hover:bg-gray-600",
      ghost: "hover:bg-gray-800 text-gray-300 hover:text-gray-100",
      link: "text-blue-400 underline-offset-4 hover:underline",
    };

    const sizes = {
      sm: "h-9 rounded-md px-3 text-xs",
      md: "h-10 px-4 py-2",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    };

    const classes = [
      baseClasses,
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button className={classes} ref={ref} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

DemoButton.displayName = "DemoButton";

const ButtonPage: React.FC = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <div className="max-w-4xl">
      <DocsHeading>Button</DocsHeading>
      <DocsPara>
        A versatile button component with multiple variants, sizes, and states.
        Built with accessibility in mind and fully customizable.
      </DocsPara>

      <DocsHeading level={2}>Installation</DocsHeading>
      <DocsPara>Add the Button component to your project:</DocsPara>
      <CodeBlock>npx @elixir-labs/ui add button</CodeBlock>

      <DocsHeading level={2}>Usage</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>Click me</Button>;
}`}
      </CodeBlock>

      <DocsHeading level={2}>Examples</DocsHeading>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Default</DocsHeading>
          <div className="flex items-center gap-4 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoButton>Button</DemoButton>
          </div>
          <CodeBlock codeLanguage="jsx">{`<Button>Button</Button>`}</CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Variants</DocsHeading>
          <div className="flex flex-wrap items-center gap-4 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoButton variant="default">Default</DemoButton>
            <DemoButton variant="secondary">Secondary</DemoButton>
            <DemoButton variant="destructive">Destructive</DemoButton>
            <DemoButton variant="outline">Outline</DemoButton>
            <DemoButton variant="ghost">Ghost</DemoButton>
            <DemoButton variant="link">Link</DemoButton>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Button variant="default">Default</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Sizes</DocsHeading>
          <div className="flex flex-wrap items-center gap-4 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoButton size="sm">Small</DemoButton>
            <DemoButton size="md">Medium</DemoButton>
            <DemoButton size="lg">Large</DemoButton>
            <DemoButton size="icon">🚀</DemoButton>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button size="icon">🚀</Button>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Disabled State</DocsHeading>
          <div className="flex items-center gap-4 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoButton disabled>Disabled</DemoButton>
            <DemoButton variant="secondary" disabled>
              Disabled Secondary
            </DemoButton>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Button disabled>Disabled</Button>
<Button variant="secondary" disabled>Disabled Secondary</Button>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>With Icons</DocsHeading>
          <div className="flex flex-wrap items-center gap-4 p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoButton>📧 Send Email</DemoButton>
            <DemoButton variant="outline">⬇️ Download</DemoButton>
            <DemoButton variant="secondary">🔄 Refresh</DemoButton>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Button>📧 Send Email</Button>
<Button variant="outline">⬇️ Download</Button>
<Button variant="secondary">🔄 Refresh</Button>

// With icon libraries like Lucide or Heroicons
import { Mail, Download, RefreshCw } from 'lucide-react';

<Button><Mail className="mr-2 h-4 w-4" />Send Email</Button>
<Button variant="outline"><Download className="mr-2 h-4 w-4" />Download</Button>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Interactive Example</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center gap-4">
              <DemoButton onClick={() => setClickCount(clickCount + 1)}>
                Clicked {clickCount} times
              </DemoButton>
              <DemoButton variant="outline" onClick={() => setClickCount(0)}>
                Reset
              </DemoButton>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`const [clickCount, setClickCount] = useState(0);

return (
  <div className="flex items-center gap-4">
    <Button onClick={() => setClickCount(clickCount + 1)}>
      Clicked {clickCount} times
    </Button>
    <Button variant="outline" onClick={() => setClickCount(0)}>
      Reset
    </Button>
  </div>
);`}
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
                variant
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                &quot;default&quot; | &quot;destructive&quot; |
                &quot;outline&quot; | &quot;secondary&quot; | &quot;ghost&quot;
                | &quot;link&quot;
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                &quot;default&quot;
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                The visual style variant of the button
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                size
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot; |
                &quot;icon&quot;
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                &quot;md&quot;
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                The size of the button
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
                Whether the button is disabled
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
                Additional CSS classes to apply
              </td>
            </tr>
            <tr>
              <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                children
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                ReactNode
              </td>
              <td className="border border-gray-700 px-4 py-2 text-sm">-</td>
              <td className="border border-gray-700 px-4 py-2 text-sm">
                The content of the button
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <DocsHeading level={2}>Source Code</DocsHeading>
      <DocsPara>The complete source code for the Button component:</DocsPara>

      <CodeBlock codeLanguage="jsx">
        {`import React from 'react';
import { clsx } from 'clsx';

const Button = React.forwardRef(({ 
  children, 
  variant = 'default', 
  size = 'md', 
  disabled = false, 
  className,
  ...props 
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50';
  
  const variants = {
    default: 'bg-primary text-primary-foreground hover:bg-primary/90',
    destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
    outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    ghost: 'hover:bg-accent hover:text-accent-foreground',
    link: 'text-primary underline-offset-4 hover:underline',
  };

  const sizes = {
    sm: 'h-9 rounded-md px-3 text-xs',
    md: 'h-10 px-4 py-2',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10',
  };

  return (
    <button
      className={clsx(
        baseClasses,
        variants[variant],
        sizes[size],
        className
      )}
      ref={ref}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export { Button };`}
      </CodeBlock>

      <DocsHeading level={2}>Accessibility</DocsHeading>
      <DocsPara>The Button component follows WAI-ARIA guidelines:</DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>
          Uses semantic &lt;button&gt; element for proper screen reader support
        </li>
        <li>Includes focus-visible styles for keyboard navigation</li>
        <li>Properly handles disabled state with aria attributes</li>
        <li>Supports all standard button ARIA properties</li>
      </ul>

      <DocsHeading level={2}>Customization</DocsHeading>
      <DocsPara>
        You can customize the button by modifying the CSS variables or extending
        the component:
      </DocsPara>

      <CodeBlock codeLanguage="jsx">
        {`// Custom button with additional styling
const CustomButton = ({ className, ...props }) => {
  return (
    <Button 
      className={\`shadow-lg transform hover:scale-105 transition-transform \${className}\`}
      {...props}
    />
  );
};

// Usage
<CustomButton variant="default">Hover to scale</CustomButton>`}
      </CodeBlock>

      <div className="mt-8 p-4 border border-blue-700 bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tip</h4>
        <DocsParaFaded>
          Use the &quot;asChild&quot; pattern with React libraries like Next.js
          Link or React Router for navigation buttons while maintaining all
          button styling and accessibility features.
        </DocsParaFaded>
      </div>
    </div>
  );
};

export default ButtonPage;
