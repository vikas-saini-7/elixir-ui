"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

// Demo components
const DemoAlert = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", variant = "default", ...props }, ref) => {
    const variants: Record<string, string> = {
      default: "bg-gray-800 text-gray-100 border-gray-600",
      destructive: "bg-red-900/50 text-red-100 border-red-800",
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={`relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7 ${variants[variant]} ${className}`}
        {...props}
      />
    );
  }
);
DemoAlert.displayName = "DemoAlert";

const DemoAlertTitle = React.forwardRef<HTMLHeadingElement, any>(
  ({ className = "", ...props }, ref) => (
    <h5
      ref={ref}
      className={`mb-1 font-medium leading-none tracking-tight ${className}`}
      {...props}
    />
  )
);
DemoAlertTitle.displayName = "DemoAlertTitle";

const DemoAlertDescription = React.forwardRef<HTMLParagraphElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`text-sm [&_p]:leading-relaxed ${className}`}
      {...props}
    />
  )
);
DemoAlertDescription.displayName = "DemoAlertDescription";

const AlertPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Alert</DocsHeading>
      <DocsPara>
        Display important messages, notifications, or status updates to users
        with the Alert component. Supports different variants for various types
        of information.
      </DocsPara>

      <DocsHeading level={2}>Installation</DocsHeading>
      <DocsPara>Add the Alert component to your project:</DocsPara>
      <CodeBlock>npx @elixir-labs/ui add alert</CodeBlock>

      <DocsHeading level={2}>Usage</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function MyComponent() {
  return (
    <Alert>
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  );
}`}
      </CodeBlock>

      <DocsHeading level={2}>Examples</DocsHeading>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Default Alert</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoAlert>
              <DemoAlertTitle>Heads up!</DemoAlertTitle>
              <DemoAlertDescription>
                You can add components to your app using the cli.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Destructive Alert</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoAlert variant="destructive">
              <DemoAlertTitle>Error</DemoAlertTitle>
              <DemoAlertDescription>
                Your session has expired. Please log in again.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>With Icons</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50 space-y-4">
            <DemoAlert>
              <div className="w-4 h-4 absolute left-4 top-4"></div>
              <DemoAlertTitle>Information</DemoAlertTitle>
              <DemoAlertDescription>
                This is an informational message with an icon.
              </DemoAlertDescription>
            </DemoAlert>

            <DemoAlert variant="destructive">
              <div className="w-4 h-4 absolute left-4 top-4"></div>
              <DemoAlertTitle>Warning</DemoAlertTitle>
              <DemoAlertDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`import { AlertCircle, Info } from "lucide-react";

<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    This is an informational message with an icon.
  </AlertDescription>
</Alert>

<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    This action cannot be undone. This will permanently delete your account.
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Different Use Cases</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50 space-y-4">
            <div>
              <DemoAlert>
                <div className="w-4 h-4 absolute left-4 top-4"></div>
                <DemoAlertTitle>Success</DemoAlertTitle>
                <DemoAlertDescription>
                  Your changes have been saved successfully.
                </DemoAlertDescription>
              </DemoAlert>
            </div>

            <DemoAlert>
              <div className="w-4 h-4 absolute left-4 top-4"></div>
              <DemoAlertTitle>Tip</DemoAlertTitle>
              <DemoAlertDescription>
                You can use keyboard shortcuts to navigate faster. Press Ctrl+K
                to open the command palette.
              </DemoAlertDescription>
            </DemoAlert>

            <DemoAlert>
              <div className="w-4 h-4 absolute left-4 top-4"></div>
              <DemoAlertTitle>Update Available</DemoAlertTitle>
              <DemoAlertDescription>
                A new version of the application is available.{" "}
                <span className="text-blue-400 cursor-pointer hover:underline">
                  Update now
                </span>{" "}
                to get the latest features.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`// Success Alert
<Alert>
  <CheckCircle className="h-4 w-4" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your changes have been saved successfully.
  </AlertDescription>
</Alert>

// Tip Alert
<Alert>
  <Lightbulb className="h-4 w-4" />
  <AlertTitle>Tip</AlertTitle>
  <AlertDescription>
    You can use keyboard shortcuts to navigate faster.
  </AlertDescription>
</Alert>

// Update Alert
<Alert>
  <Download className="h-4 w-4" />
  <AlertTitle>Update Available</AlertTitle>
  <AlertDescription>
    A new version is available. <Button variant="link">Update now</Button>
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Without Title</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoAlert>
              <div className="w-4 h-4 absolute left-4 top-4"></div>
              <DemoAlertDescription>
                New features have been added to the dashboard. Check out the
                latest updates in the changelog.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Alert>
  <Megaphone className="h-4 w-4" />
  <AlertDescription>
    New features have been added to the dashboard. Check out the latest updates.
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Custom Styling</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50 space-y-4">
            <DemoAlert className="border-blue-600 bg-blue-900/20 text-blue-100">
              <div className="w-4 h-4 absolute left-4 top-4 text-blue-400"></div>
              <DemoAlertTitle className="text-blue-300">
                Custom Blue Alert
              </DemoAlertTitle>
              <DemoAlertDescription>
                This alert uses custom colors for a unique appearance.
              </DemoAlertDescription>
            </DemoAlert>

            <DemoAlert className="border-green-600 bg-green-900/20 text-green-100">
              <div className="w-4 h-4 absolute left-4 top-4 text-green-400"></div>
              <DemoAlertTitle className="text-green-300">
                Custom Green Alert
              </DemoAlertTitle>
              <DemoAlertDescription>
                You can customize the appearance by overriding the default
                classes.
              </DemoAlertDescription>
            </DemoAlert>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Alert className="border-blue-600 bg-blue-900/20 text-blue-100">
  <Info className="h-4 w-4 text-blue-400" />
  <AlertTitle className="text-blue-300">Custom Blue Alert</AlertTitle>
  <AlertDescription>
    This alert uses custom colors for a unique appearance.
  </AlertDescription>
</Alert>

<Alert className="border-green-600 bg-green-900/20 text-green-100">
  <CheckCircle className="h-4 w-4 text-green-400" />
  <AlertTitle className="text-green-300">Custom Green Alert</AlertTitle>
  <AlertDescription>
    You can customize the appearance by overriding the default classes.
  </AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>API Reference</DocsHeading>

      <div className="space-y-6">
        <div>
          <DocsHeading level={3}>Alert</DocsHeading>
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
                    &quot;default&quot; | &quot;destructive&quot;
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    &quot;default&quot;
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    The visual style variant
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                    className
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    string
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    -
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    Additional CSS classes
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                    children
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    ReactNode
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    -
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    Alert content
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <DocsHeading level={3}>AlertTitle</DocsHeading>
          <DocsPara>
            Renders as an &lt;h5&gt; element with title styling. Optional
            component for alert headers.
          </DocsPara>
        </div>

        <div>
          <DocsHeading level={3}>AlertDescription</DocsHeading>
          <DocsPara>
            Container for alert content. Supports rich content including links
            and formatted text.
          </DocsPara>
        </div>
      </div>

      <DocsHeading level={2}>Source Code</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import React from 'react';
import { clsx } from 'clsx';

const Alert = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
  const variants = {
    default: 'bg-background text-foreground',
    destructive: 'border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive',
  };

  return (
    <div
      ref={ref}
      role="alert"
      className={clsx(
        'relative w-full rounded-lg border p-4 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7',
        variants[variant],
        className
      )}
      {...props}
    />
  );
});
Alert.displayName = 'Alert';

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={clsx('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
));
AlertTitle.displayName = 'AlertTitle';

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
));
AlertDescription.displayName = 'AlertDescription';

export { Alert, AlertTitle, AlertDescription };`}
      </CodeBlock>

      <DocsHeading level={2}>Accessibility</DocsHeading>
      <DocsPara>
        The Alert component follows accessibility best practices:
      </DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>
          Uses{" "}
          <code className="text-sm bg-gray-800 px-1 rounded">
            role=&quot;alert&quot;
          </code>{" "}
          for screen reader announcements
        </li>
        <li>Proper heading hierarchy with AlertTitle</li>
        <li>Good color contrast for readability</li>
        <li>Icon positioning doesn&apos;t interfere with text selection</li>
        <li>Works well with keyboard navigation</li>
      </ul>

      <DocsHeading level={2}>Best Practices</DocsHeading>
      <div className="space-y-4">
        <div className="border border-green-700 bg-green-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-300 mb-2">✅ Do</h4>
          <ul className="space-y-1 text-green-200 text-sm">
            <li>Use appropriate variants for message types</li>
            <li>Include relevant icons to improve comprehension</li>
            <li>Keep messages concise and actionable</li>
            <li>Provide clear next steps when applicable</li>
            <li>Test with screen readers for accessibility</li>
          </ul>
        </div>

        <div className="border border-red-700 bg-red-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-red-300 mb-2">❌ Don&apos;t</h4>
          <ul className="space-y-1 text-red-200 text-sm">
            <li>Overuse alerts - they should be for important messages only</li>
            <li>Make alerts too long or overwhelming</li>
            <li>Use alerts for regular content or navigation</li>
            <li>Forget to provide a way to dismiss persistent alerts</li>
          </ul>
        </div>
      </div>

      <DocsHeading level={2}>Common Patterns</DocsHeading>
      <DocsPara>
        Here are some common patterns for using alerts effectively:
      </DocsPara>

      <div className="space-y-4">
        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Form Validation</h4>
          <div className="text-sm mb-2 text-gray-400">
            Display validation errors above forms:
          </div>
          <CodeBlock codeLanguage="jsx">
            {`{errors.length > 0 && (
  <Alert variant="destructive" className="mb-4">
    <AlertCircle className="h-4 w-4" />
    <AlertTitle>Please fix the following errors:</AlertTitle>
    <AlertDescription>
      <ul className="list-disc list-inside">
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </AlertDescription>
  </Alert>
)}`}
          </CodeBlock>
        </div>

        <div className="border border-gray-700 rounded-lg p-4">
          <h4 className="font-semibold mb-2">Status Updates</h4>
          <div className="text-sm mb-2 text-gray-400">
            Show operation status with appropriate styling:
          </div>
          <CodeBlock codeLanguage="jsx">
            {`const getAlertVariant = (status) => {
  switch (status) {
    case 'error': return 'destructive';
    case 'success': return 'default';
    default: return 'default';
  }
};

<Alert variant={getAlertVariant(status)}>
  <AlertTitle>{status === 'success' ? 'Success!' : 'Error'}</AlertTitle>
  <AlertDescription>{message}</AlertDescription>
</Alert>`}
          </CodeBlock>
        </div>
      </div>

      <div className="mt-8 p-4 border border-blue-700 bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tip</h4>
        <DocsParaFaded>
          Consider using a toast notification system for temporary alerts, and
          reserve the Alert component for persistent messages that need to
          remain visible until the user takes action.
        </DocsParaFaded>
      </div>
    </div>
  );
};

export default AlertPage;
