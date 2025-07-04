"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

const TemplatesPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Templates</DocsHeading>
      <DocsPara>
        Ready-to-use page templates and component patterns built with Elixir UI.
        Copy and customize these examples to accelerate your development.
      </DocsPara>

      <DocsHeading level={2}>Coming Soon</DocsHeading>
      <DocsPara>
        We&apos;re working on a comprehensive collection of templates including:
      </DocsPara>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <div className="border border-gray-700 rounded-lg p-6 opacity-75">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
              <span className="text-blue-400">📊</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Dashboard</h3>
              <DocsParaFaded>
                Admin dashboard with charts and metrics
              </DocsParaFaded>
            </div>
          </div>
          <div className="text-sm text-gray-400">Coming soon...</div>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 opacity-75">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center">
              <span className="text-green-400">🔐</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Authentication</h3>
              <DocsParaFaded>
                Login, register, and forgot password pages
              </DocsParaFaded>
            </div>
          </div>
          <div className="text-sm text-gray-400">Coming soon...</div>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 opacity-75">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center">
              <span className="text-purple-400">🚀</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Landing Page</h3>
              <DocsParaFaded>
                Marketing landing page with hero section
              </DocsParaFaded>
            </div>
          </div>
          <div className="text-sm text-gray-400">Coming soon...</div>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 opacity-75">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-orange-600/20 rounded-lg flex items-center justify-center">
              <span className="text-orange-400">🛒</span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">E-commerce</h3>
              <DocsParaFaded>Product catalog and shopping cart</DocsParaFaded>
            </div>
          </div>
          <div className="text-sm text-gray-400">Coming soon...</div>
        </div>
      </div>

      <DocsHeading level={2}>Quick Examples</DocsHeading>
      <DocsPara>
        Here are some quick component combinations you can use right now:
      </DocsPara>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Login Form</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-sm mx-auto bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white">Sign In</h2>
                <p className="text-gray-400 mt-2">
                  Enter your credentials to access your account
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Enter your password"
                  />
                </div>

                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
                  Sign In
                </button>

                <div className="text-center">
                  <span className="text-gray-400">
                    Don&apos;t have an account?{" "}
                  </span>
                  <a href="#" className="text-blue-400 hover:text-blue-300">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function LoginForm() {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl">Sign In</CardTitle>
        <CardDescription>
          Enter your credentials to access your account
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Enter your password" />
        </div>
        
        <Button className="w-full">Sign In</Button>
        
        <div className="text-center text-sm">
          <span className="text-muted-foreground">Don't have an account? </span>
          <a href="#" className="text-primary hover:underline">Sign up</a>
        </div>
      </CardContent>
    </Card>
  );
}`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Notification Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="max-w-md mx-auto bg-gray-800 p-4 rounded-lg border border-gray-700">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-600/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-400">🔔</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">
                    New Update Available
                  </h3>
                  <p className="text-sm text-gray-400 mt-1">
                    Version 2.1.0 includes new components and bug fixes.
                  </p>
                  <div className="flex gap-2 mt-3">
                    <button className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700">
                      Update Now
                    </button>
                    <button className="px-3 py-1 text-gray-400 text-sm rounded hover:text-gray-300">
                      Later
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function NotificationCard() {
  return (
    <Card className="w-full max-w-md">
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
            <Bell className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <h3 className="font-medium">New Update Available</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Version 2.1.0 includes new components and bug fixes.
            </p>
            <div className="flex gap-2 mt-3">
              <Button size="sm">Update Now</Button>
              <Button variant="ghost" size="sm">Later</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Feature Card Grid</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-blue-400">⚡</span>
                </div>
                <h3 className="font-medium text-white mb-2">
                  Fast Performance
                </h3>
                <p className="text-sm text-gray-400">
                  Optimized for speed with minimal bundle size.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-green-600/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-green-400">🎨</span>
                </div>
                <h3 className="font-medium text-white mb-2">Customizable</h3>
                <p className="text-sm text-gray-400">
                  Easily customize colors, fonts, and spacing.
                </p>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="w-10 h-10 bg-purple-600/20 rounded-lg flex items-center justify-center mb-3">
                  <span className="text-purple-400">♿</span>
                </div>
                <h3 className="font-medium text-white mb-2">Accessible</h3>
                <p className="text-sm text-gray-400">
                  Built with accessibility best practices.
                </p>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`import { Card, CardContent } from "@/components/ui/card";
import { Zap, Palette, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast Performance",
    description: "Optimized for speed with minimal bundle size.",
  },
  {
    icon: Palette,
    title: "Customizable",
    description: "Easily customize colors, fonts, and spacing.",
  },
  {
    icon: Shield,
    title: "Accessible",
    description: "Built with accessibility best practices.",
  },
];

export default function FeatureGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <Card key={index}>
          <CardContent className="p-4">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3">
              <feature.icon className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-medium mb-2">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">
              {feature.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Stats Dashboard</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400">Total Users</div>
                <div className="text-2xl font-bold text-white mt-1">12,483</div>
                <div className="text-xs text-green-400 mt-1">
                  +12% from last month
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400">Revenue</div>
                <div className="text-2xl font-bold text-white mt-1">
                  $45,231
                </div>
                <div className="text-xs text-green-400 mt-1">
                  +8% from last month
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400">Orders</div>
                <div className="text-2xl font-bold text-white mt-1">1,234</div>
                <div className="text-xs text-red-400 mt-1">
                  -2% from last month
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <div className="text-sm text-gray-400">Conversion</div>
                <div className="text-2xl font-bold text-white mt-1">3.24%</div>
                <div className="text-xs text-green-400 mt-1">
                  +0.5% from last month
                </div>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  { title: "Total Users", value: "12,483", change: "+12%", positive: true },
  { title: "Revenue", value: "$45,231", change: "+8%", positive: true },
  { title: "Orders", value: "1,234", change: "-2%", positive: false },
  { title: "Conversion", value: "3.24%", change: "+0.5%", positive: true },
];

export default function StatsDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className={\`text-xs mt-1 \${stat.positive ? 'text-green-600' : 'text-red-600'}\`}>
              {stat.change} from last month
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>Get Started</DocsHeading>
      <DocsPara>
        Ready to build your own templates? Start with our components and create
        amazing interfaces:
      </DocsPara>

      <div className="flex gap-4 mt-6">
        <a
          href="/docs/components/button"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
        >
          Browse Components
        </a>
        <a
          href="/docs/installation"
          className="inline-flex items-center px-4 py-2 border border-gray-600 text-gray-300 rounded-md hover:border-gray-500 transition-colors"
        >
          Installation Guide
        </a>
      </div>

      <div className="mt-8 p-4 border border-yellow-700 bg-yellow-900/20 rounded-lg">
        <h4 className="font-semibold text-yellow-300 mb-2">
          🚧 Templates Coming Soon
        </h4>
        <DocsParaFaded>
          We&apos;re working on a comprehensive template library. Stay tuned for
          updates, or contribute your own templates to the community!
        </DocsParaFaded>
      </div>
    </div>
  );
};

export default TemplatesPage;
