"use client";

import DocsHeading from "../../../components/common/docs/DocsHeading";
import DocsPara from "../../../components/common/docs/DocsPara";
import DocsParaFaded from "../../../components/common/docs/DocsParaFaded";
import CodeBlock from "../../../components/common/docs/CodeBlock";

export default function ChangelogPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div>
        <DocsHeading level={1}>Changelog</DocsHeading>
        <DocsParaFaded>
          Stay up to date with the latest features, improvements, and bug fixes.
        </DocsParaFaded>
      </div>

      {/* Version 1.0.5 */}
      <div className="border-l-4 border-yellow-500 pl-6">
        <div className="flex items-center gap-3 mb-4">
          <DocsHeading level={2}>Version 2.0.0</DocsHeading>
          <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
            Latest
          </span>
        </div>
        <p className="text-sm text-muted-foreground mb-4">
          Released on July 4, 2025
        </p>

        {/* <div className="space-y-6">
          <div>
            <DocsHeading level={3}>📚 Documentation Overhaul</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Complete documentation website redesign with modern, minimal
                  UI
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Added comprehensive component documentation with live examples
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Interactive code examples with syntax highlighting</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Framework-specific installation guides (Next.js, Vite, CRA)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>API reference tables for all components</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Accessibility guidelines and best practices</span>
              </li>
            </ul>
          </div>

          <div>
            <DocsHeading level={3}>🔍 Enhanced Search</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Global search functionality with keyboard shortcuts (Cmd/Ctrl
                  + K)
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Categorized search results for better navigation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Quick access to components, guides, and installation docs
                </span>
              </li>
            </ul>
          </div>

          <div>
            <DocsHeading level={3}>🧩 New Components</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Badge component with multiple variants and customization
                  options
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Enhanced Avatar component with fallback support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Improved Alert component with icon support</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* <div className="border-l-4 border-gray-300 pl-6">
        <DocsHeading level={2}>Version 1.0.4</DocsHeading>
        <p className="text-sm text-muted-foreground mb-4">
          Released on June 15, 2025
        </p>

        <div className="space-y-4">
          <div>
            <DocsHeading level={3}>🐛 Bug Fixes</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Fixed TypeScript definition issues with forwardRef components
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Resolved styling conflicts with Tailwind CSS purging
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Fixed CLI dependency installation issues</span>
              </li>
            </ul>
          </div>

          <div>
            <DocsHeading level={3}>✨ Improvements</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Enhanced Button component with loading states</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>
                  Improved Card component with header and footer slots
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Better accessibility support across all components</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* Version 1.0.3 */}
        {/* <div className="border-l-4 border-gray-300 pl-6">
        <DocsHeading level={2}>Version 1.0.3</DocsHeading>
        <p className="text-sm text-muted-foreground mb-4">
          Released on May 20, 2025
        </p>

        <div className="space-y-4">
          <div>
            <DocsHeading level={3}>🚀 Initial Release</DocsHeading>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Core CLI functionality with init and add commands</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Basic component templates (Button, Input, Card)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Tailwind CSS integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Component tracking with components.json</span>
              </li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* Migration Guide */}
        {/* <div className="bg-muted/50 rounded-lg p-6">
        <DocsHeading level={2}>Migration Guide</DocsHeading>
        <DocsPara>
          If you're upgrading from an older version, here's what you need to
          know:
        </DocsPara>

        <div className="space-y-4">
          <div>
            <DocsHeading level={3}>From v1.0.4 to v1.0.5</DocsHeading>
            <DocsPara>
              This update focuses on documentation improvements and doesn't
              introduce breaking changes. However, we recommend updating your
              components to take advantage of the new features:
            </DocsPara>
            <CodeBlock codeLanguage="bash">
              {`# Update existing components
npx elixir-labs-ui add badge
npx elixir-labs-ui add avatar --force

# No breaking changes, safe to update`}
            </CodeBlock>
          </div>

          <div>
            <DocsHeading level={3}>From v1.0.3 to v1.0.4</DocsHeading>
            <DocsPara>
              This update included some TypeScript improvements. Update your
              imports if needed:
            </DocsPara>
            <CodeBlock codeLanguage="tsx">
              {`// Before
import { Button } from './components/ui/button.jsx'

// After
import { Button } from './components/ui/button'`}
            </CodeBlock>
          </div>
        </div>
      </div> */}

        {/* Future Roadmap */}
        {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg p-6">
        <DocsHeading level={2}>🚀 What's Next</DocsHeading>
        <DocsPara>Here's what we're working on for future releases:</DocsPara>

        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <DocsHeading level={3}>Components</DocsHeading>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Select / Dropdown component</li>
              <li>• Modal / Dialog component</li>
              <li>• Tabs component</li>
              <li>• Table component</li>
              <li>• Tooltip component</li>
              <li>• Toggle Switch component</li>
            </ul>
          </div>
          <div>
            <DocsHeading level={3}>Features</DocsHeading>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Custom theme generator</li>
              <li>• Component playground</li>
              <li>• Storybook integration</li>
              <li>• Vue.js support</li>
              <li>• Angular support</li>
              <li>• Design system templates</li>
            </ul>
          </div>
        </div>
      </div> */}

        {/* Feedback */}
        {/* <div className="text-center p-6 bg-muted/30 rounded-lg">
        <DocsHeading level={2}>💬 Feedback</DocsHeading>
        <DocsPara>
          Have suggestions or found a bug? We'd love to hear from you!
        </DocsPara>
        <div className="flex justify-center gap-4 mt-4">
          <a
            href="https://github.com/elixir-labs/ui/issues"
            className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Report an Issue
          </a>
          <a
            href="https://github.com/elixir-labs/ui/discussions"
            className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            Share Feedback
          </a>
        </div> */}
      </div>
    </div>
  );
}
