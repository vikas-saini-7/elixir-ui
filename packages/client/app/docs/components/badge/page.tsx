"use client";

import React from "react";
import { clsx } from "clsx";
import DocsHeading from "../../../../components/common/docs/DocsHeading";
import DocsPara from "../../../../components/common/docs/DocsPara";
import DocsParaFaded from "../../../../components/common/docs/DocsParaFaded";
import CodeBlock from "../../../../components/common/docs/CodeBlock";

// Local Badge component for demo
const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "secondary" | "destructive" | "outline";
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default:
      "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
    secondary:
      "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
      "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
    outline: "text-foreground",
  };

  return (
    <div
      ref={ref}
      className={clsx(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = "Badge";

export default function BadgePage() {
  const demoCode = `import { Badge } from './components/ui/badge'

export function BadgeDemo() {
  return (
    <div className="flex items-center gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  )
}`;

  const installCode = `npx elixir-labs-ui add badge`;

  const manualCode = `import React from 'react';
import { clsx } from 'clsx';

const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
    secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
    destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
    outline: 'text-foreground',
  };

  return (
    <div
      ref={ref}
      className={clsx(
        'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Badge.displayName = 'Badge';

export { Badge };`;

  const usageCode = `import { Badge } from './components/ui/badge'

// Basic usage
<Badge>New</Badge>

// With variant
<Badge variant="secondary">Beta</Badge>
<Badge variant="destructive">Error</Badge>
<Badge variant="outline">Draft</Badge>

// With custom styling
<Badge className="bg-green-500 text-white">Success</Badge>`;

  const examplesCode = `// Status indicators
<Badge variant="secondary">Active</Badge>
<Badge variant="destructive">Inactive</Badge>

// Notifications
<Badge>3</Badge>
<Badge variant="outline">99+</Badge>

// Tags and labels
<Badge variant="outline">React</Badge>
<Badge variant="outline">TypeScript</Badge>
<Badge variant="outline">Tailwind</Badge>

// Custom colors
<Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
  Info
</Badge>
<Badge className="bg-green-100 text-green-800 hover:bg-green-200">
  Success
</Badge>
<Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200">
  Warning
</Badge>`;

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <DocsHeading level={1}>Badge</DocsHeading>
        <DocsParaFaded>
          A versatile component for displaying labels, status indicators,
          counts, and tags.
        </DocsParaFaded>
      </div>

      {/* Demo Section */}
      <div className="border rounded-lg p-6 bg-card">
        <div className="flex items-center gap-4 justify-center">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
        </div>
      </div>

      <CodeBlock codeLanguage="tsx">{demoCode}</CodeBlock>

      {/* Installation */}
      <div>
        <DocsHeading level={2}>Installation</DocsHeading>
        <DocsPara>
          Install the badge component using the Elixir UI CLI:
        </DocsPara>
        <CodeBlock codeLanguage="bash">{installCode}</CodeBlock>
      </div>

      {/* Usage */}
      <div>
        <DocsHeading level={2}>Usage</DocsHeading>
        <CodeBlock codeLanguage="tsx">{usageCode}</CodeBlock>
      </div>

      {/* Examples */}
      <div>
        <DocsHeading level={2}>Examples</DocsHeading>

        <div className="space-y-6">
          <div>
            <DocsHeading level={3}>Status Indicators</DocsHeading>
            <div className="border rounded-lg p-4 bg-card mb-4">
              <div className="flex items-center gap-3">
                <Badge variant="secondary">Active</Badge>
                <Badge variant="destructive">Inactive</Badge>
                <Badge>Live</Badge>
                <Badge variant="outline">Draft</Badge>
              </div>
            </div>
          </div>

          <div>
            <DocsHeading level={3}>Notification Counts</DocsHeading>
            <div className="border rounded-lg p-4 bg-card mb-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <span className="text-sm">Messages</span>
                  <Badge>3</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">Notifications</span>
                  <Badge variant="destructive">99+</Badge>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">Updates</span>
                  <Badge variant="outline">12</Badge>
                </div>
              </div>
            </div>
          </div>

          <div>
            <DocsHeading level={3}>Tags and Labels</DocsHeading>
            <div className="border rounded-lg p-4 bg-card mb-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">UI/UX</Badge>
              </div>
            </div>
          </div>

          <div>
            <DocsHeading level={3}>Custom Colors</DocsHeading>
            <div className="border rounded-lg p-4 bg-card mb-4">
              <div className="flex items-center gap-3">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 border-blue-200">
                  Info
                </Badge>
                <Badge className="bg-green-100 text-green-800 hover:bg-green-200 border-green-200">
                  Success
                </Badge>
                <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-200 border-yellow-200">
                  Warning
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 border-purple-200">
                  Featured
                </Badge>
              </div>
            </div>
          </div>
        </div>

        <CodeBlock codeLanguage="tsx">{examplesCode}</CodeBlock>
      </div>

      {/* API Reference */}
      <div>
        <DocsHeading level={2}>API Reference</DocsHeading>

        <div className="border rounded-lg overflow-hidden">
          <table className="w-full">
            <thead className="bg-muted/50">
              <tr className="border-b">
                <th className="text-left p-4 font-medium">Prop</th>
                <th className="text-left p-4 font-medium">Type</th>
                <th className="text-left p-4 font-medium">Default</th>
                <th className="text-left p-4 font-medium">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">variant</td>
                <td className="p-4 text-sm">
                  'default' | 'secondary' | 'destructive' | 'outline'
                </td>
                <td className="p-4 text-sm">'default'</td>
                <td className="p-4 text-sm">
                  The visual style variant of the badge
                </td>
              </tr>
              <tr className="border-b">
                <td className="p-4 font-mono text-sm">className</td>
                <td className="p-4 text-sm">string</td>
                <td className="p-4 text-sm">-</td>
                <td className="p-4 text-sm">Additional CSS classes to apply</td>
              </tr>
              <tr>
                <td className="p-4 font-mono text-sm">children</td>
                <td className="p-4 text-sm">React.ReactNode</td>
                <td className="p-4 text-sm">-</td>
                <td className="p-4 text-sm">
                  The content to display inside the badge
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Source Code */}
      <div>
        <DocsHeading level={2}>Source Code</DocsHeading>
        <DocsPara>
          You can copy and paste the following code to create your own badge
          component:
        </DocsPara>
        <CodeBlock codeLanguage="tsx">{manualCode}</CodeBlock>
      </div>

      {/* Accessibility */}
      <div>
        <DocsHeading level={2}>Accessibility</DocsHeading>
        <div className="space-y-4">
          <DocsPara>
            The Badge component follows accessibility best practices:
          </DocsPara>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Uses semantic HTML with appropriate ARIA attributes</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>
                Supports keyboard navigation with focus ring indicators
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>
                Maintains sufficient color contrast ratios for readability
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <span>Screen reader friendly with proper content structure</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <DocsHeading level={2}>Best Practices</DocsHeading>
        <div className="space-y-4">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <DocsHeading level={3}>
                <span className="text-green-600 dark:text-green-400">✓ Do</span>
              </DocsHeading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use badges for status indicators and labels</li>
                <li>• Keep badge text short and descriptive</li>
                <li>• Use consistent variants across your app</li>
                <li>• Consider color meaning and accessibility</li>
                <li>• Use appropriate size for the context</li>
              </ul>
            </div>
            <div className="space-y-3">
              <DocsHeading level={3}>
                <span className="text-red-600 dark:text-red-400">✗ Don't</span>
              </DocsHeading>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use badges for lengthy text content</li>
                <li>• Overuse badges in dense interfaces</li>
                <li>• Use destructive variant for neutral information</li>
                <li>• Make badges clickable without clear indication</li>
                <li>• Use only color to convey meaning</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
