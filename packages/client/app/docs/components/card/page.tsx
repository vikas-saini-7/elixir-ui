"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

// Demo components
const DemoCard = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`rounded-lg border border-gray-700 bg-gray-900 text-gray-100 shadow-sm ${className}`}
      {...props}
    />
  )
);
DemoCard.displayName = "DemoCard";

const DemoCardHeader = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`flex flex-col space-y-1.5 p-6 ${className}`}
      {...props}
    />
  )
);
DemoCardHeader.displayName = "DemoCardHeader";

const DemoCardTitle = React.forwardRef<HTMLHeadingElement, any>(
  ({ className = "", ...props }, ref) => (
    <h3
      ref={ref}
      className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
      {...props}
    />
  )
);
DemoCardTitle.displayName = "DemoCardTitle";

const DemoCardDescription = React.forwardRef<HTMLParagraphElement, any>(
  ({ className = "", ...props }, ref) => (
    <p ref={ref} className={`text-sm text-gray-400 ${className}`} {...props} />
  )
);
DemoCardDescription.displayName = "DemoCardDescription";

const DemoCardContent = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div ref={ref} className={`p-6 pt-0 ${className}`} {...props} />
  )
);
DemoCardContent.displayName = "DemoCardContent";

const DemoCardFooter = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`flex items-center p-6 pt-0 ${className}`}
      {...props}
    />
  )
);
DemoCardFooter.displayName = "DemoCardFooter";

const DemoButton = React.forwardRef<HTMLButtonElement, any>(
  (
    { children, variant = "default", size = "md", className = "", ...props },
    ref
  ) => {
    const variants = {
      default: "bg-blue-600 text-white hover:bg-blue-700",
      outline:
        "border border-gray-600 bg-transparent hover:bg-gray-800 text-gray-300",
    };

    const sizes = {
      sm: "h-9 px-3 text-xs",
      md: "h-10 px-4 py-2",
    };

    const classes = [
      "inline-flex items-center justify-center rounded-md font-medium transition-colors",
      variants[variant as keyof typeof variants],
      sizes[size as keyof typeof sizes],
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);
DemoButton.displayName = "DemoButton";

const CardPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Card</DocsHeading>
      <DocsPara>
        A flexible card component for displaying content in a contained,
        elevated surface. Perfect for organizing information, featuring
        products, or creating layout sections.
      </DocsPara>

      <DocsHeading level={2}>Installation</DocsHeading>
      <DocsPara>Add the Card component to your project:</DocsPara>
      <CodeBlock>npx @elixir-labs/ui add card</CodeBlock>

      <DocsHeading level={2}>Usage</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";`}
      </CodeBlock>

      <DocsHeading level={2}>Examples</DocsHeading>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Basic Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoCard className="w-80">
              <DemoCardHeader>
                <DemoCardTitle>Card Title</DemoCardTitle>
                <DemoCardDescription>
                  This is a basic card with a title and description.
                </DemoCardDescription>
              </DemoCardHeader>
              <DemoCardContent>
                <p className="text-gray-300">
                  Card content goes here. You can add any content you want.
                </p>
              </DemoCardContent>
            </DemoCard>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Card className="w-80">
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>
      This is a basic card with a title and description.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content goes here. You can add any content you want.</p>
  </CardContent>
</Card>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Card with Footer</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoCard className="w-80">
              <DemoCardHeader>
                <DemoCardTitle>Project Alpha</DemoCardTitle>
                <DemoCardDescription>
                  A revolutionary new approach to modern web development.
                </DemoCardDescription>
              </DemoCardHeader>
              <DemoCardContent>
                <div className="space-y-2">
                  <p className="text-gray-300">Status: In Progress</p>
                  <p className="text-gray-300">Team: 5 developers</p>
                  <p className="text-gray-300">Deadline: Q2 2024</p>
                </div>
              </DemoCardContent>
              <DemoCardFooter className="gap-2">
                <DemoButton size="sm">View Details</DemoButton>
                <DemoButton variant="outline" size="sm">
                  Edit
                </DemoButton>
              </DemoCardFooter>
            </DemoCard>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Card className="w-80">
  <CardHeader>
    <CardTitle>Project Alpha</CardTitle>
    <CardDescription>
      A revolutionary new approach to modern web development.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <p>Status: In Progress</p>
      <p>Team: 5 developers</p>
      <p>Deadline: Q2 2024</p>
    </div>
  </CardContent>
  <CardFooter className="gap-2">
    <Button size="sm">View Details</Button>
    <Button variant="outline" size="sm">Edit</Button>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Product Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoCard className="w-80">
              <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-t-lg"></div>
              <DemoCardHeader>
                <DemoCardTitle>Premium Plan</DemoCardTitle>
                <DemoCardDescription>
                  Everything you need to scale your business.
                </DemoCardDescription>
              </DemoCardHeader>
              <DemoCardContent>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-blue-400">$29/mo</div>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>✓ Unlimited projects</li>
                    <li>✓ Priority support</li>
                    <li>✓ Advanced analytics</li>
                    <li>✓ Custom integrations</li>
                  </ul>
                </div>
              </DemoCardContent>
              <DemoCardFooter>
                <DemoButton className="w-full">Get Started</DemoButton>
              </DemoCardFooter>
            </DemoCard>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Card className="w-80">
  <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-700 rounded-t-lg"></div>
  <CardHeader>
    <CardTitle>Premium Plan</CardTitle>
    <CardDescription>
      Everything you need to scale your business.
    </CardDescription>
  </CardHeader>
  <CardContent>
    <div className="space-y-2">
      <div className="text-3xl font-bold text-blue-400">$29/mo</div>
      <ul className="space-y-1 text-sm">
        <li>✓ Unlimited projects</li>
        <li>✓ Priority support</li>
        <li>✓ Advanced analytics</li>
        <li>✓ Custom integrations</li>
      </ul>
    </div>
  </CardContent>
  <CardFooter>
    <Button className="w-full">Get Started</Button>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Stats Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <DemoCard>
                <DemoCardHeader className="pb-2">
                  <DemoCardDescription>Total Users</DemoCardDescription>
                  <DemoCardTitle className="text-3xl">12,483</DemoCardTitle>
                </DemoCardHeader>
                <DemoCardContent>
                  <p className="text-green-400 text-sm">+12% from last month</p>
                </DemoCardContent>
              </DemoCard>

              <DemoCard>
                <DemoCardHeader className="pb-2">
                  <DemoCardDescription>Revenue</DemoCardDescription>
                  <DemoCardTitle className="text-3xl">$45,231</DemoCardTitle>
                </DemoCardHeader>
                <DemoCardContent>
                  <p className="text-green-400 text-sm">+8% from last month</p>
                </DemoCardContent>
              </DemoCard>

              <DemoCard>
                <DemoCardHeader className="pb-2">
                  <DemoCardDescription>Active Projects</DemoCardDescription>
                  <DemoCardTitle className="text-3xl">27</DemoCardTitle>
                </DemoCardHeader>
                <DemoCardContent>
                  <p className="text-red-400 text-sm">-2% from last month</p>
                </DemoCardContent>
              </DemoCard>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Total Users</CardDescription>
      <CardTitle className="text-3xl">12,483</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-green-400 text-sm">+12% from last month</p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Revenue</CardDescription>
      <CardTitle className="text-3xl">$45,231</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-green-400 text-sm">+8% from last month</p>
    </CardContent>
  </Card>
  
  <Card>
    <CardHeader className="pb-2">
      <CardDescription>Active Projects</CardDescription>
      <CardTitle className="text-3xl">27</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-red-400 text-sm">-2% from last month</p>
    </CardContent>
  </Card>
</div>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Form Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <DemoCard className="w-96">
              <DemoCardHeader>
                <DemoCardTitle>Create Account</DemoCardTitle>
                <DemoCardDescription>
                  Enter your information to create a new account.
                </DemoCardDescription>
              </DemoCardHeader>
              <DemoCardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full px-3 py-2 bg-gray-800 border border-gray-600 rounded-md text-gray-100 placeholder-gray-400"
                  />
                </div>
              </DemoCardContent>
              <DemoCardFooter className="flex-col gap-2">
                <DemoButton className="w-full">Create Account</DemoButton>
                <p className="text-xs text-gray-400 text-center">
                  Already have an account?{" "}
                  <span className="text-blue-400 cursor-pointer">Sign in</span>
                </p>
              </DemoCardFooter>
            </DemoCard>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Card className="w-96">
  <CardHeader>
    <CardTitle>Create Account</CardTitle>
    <CardDescription>
      Enter your information to create a new account.
    </CardDescription>
  </CardHeader>
  <CardContent className="space-y-4">
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
    <div className="space-y-2">
      <Label htmlFor="password">Password</Label>
      <Input id="password" type="password" placeholder="Enter your password" />
    </div>
  </CardContent>
  <CardFooter className="flex-col gap-2">
    <Button className="w-full">Create Account</Button>
    <p className="text-xs text-muted-foreground text-center">
      Already have an account? <a href="#" className="text-primary">Sign in</a>
    </p>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>API Reference</DocsHeading>

      <div className="space-y-6">
        <div>
          <DocsHeading level={3}>Card</DocsHeading>
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
                    Card content
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <DocsHeading level={3}>
            CardHeader / CardContent / CardFooter
          </DocsHeading>
          <DocsPara>
            These components accept the same props as Card and provide semantic
            structure.
          </DocsPara>
        </div>

        <div>
          <DocsHeading level={3}>CardTitle</DocsHeading>
          <DocsPara>
            Renders as an &lt;h3&gt; element by default with title styling.
          </DocsPara>
        </div>

        <div>
          <DocsHeading level={3}>CardDescription</DocsHeading>
          <DocsPara>
            Renders as a &lt;p&gt; element with muted text styling.
          </DocsPara>
        </div>
      </div>

      <DocsHeading level={2}>Source Code</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import React from 'react';
import { clsx } from 'clsx';

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      className
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx('flex flex-col space-y-1.5 p-6', className)}
    {...props}
  />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={clsx(
      'text-2xl font-semibold leading-none tracking-tight',
      className
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={clsx('text-sm text-muted-foreground', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('p-6 pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={clsx('flex items-center p-6 pt-0', className)} {...props} />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };`}
      </CodeBlock>

      <DocsHeading level={2}>Accessibility</DocsHeading>
      <DocsPara>
        The Card components follow accessibility best practices:
      </DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>Uses semantic HTML structure</li>
        <li>CardTitle uses proper heading hierarchy (&lt;h3&gt;)</li>
        <li>Maintains proper color contrast ratios</li>
        <li>Works well with screen readers</li>
        <li>Supports keyboard navigation when interactive</li>
      </ul>

      <DocsHeading level={2}>Best Practices</DocsHeading>
      <div className="space-y-4">
        <div className="border border-green-700 bg-green-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-300 mb-2">✅ Do</h4>
          <ul className="space-y-1 text-green-200 text-sm">
            <li>Use CardHeader for titles and descriptions</li>
            <li>Keep card content focused and scannable</li>
            <li>Use consistent spacing between cards</li>
            <li>Provide clear calls-to-action in CardFooter</li>
          </ul>
        </div>

        <div className="border border-red-700 bg-red-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-red-300 mb-2">❌ Don&apos;t</h4>
          <ul className="space-y-1 text-red-200 text-sm">
            <li>Overcrowd cards with too much information</li>
            <li>Make cards too wide or too narrow for content</li>
            <li>Use cards for single pieces of text</li>
            <li>Forget to test responsive behavior</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
