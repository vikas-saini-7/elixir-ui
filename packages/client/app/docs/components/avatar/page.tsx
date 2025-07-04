"use client";
import React from "react";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import CodeBlock from "@/components/common/docs/CodeBlock";

// Demo components
const DemoAvatar = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full bg-gray-700 ${className}`}
      {...props}
    />
  )
);
DemoAvatar.displayName = "DemoAvatar";

const DemoAvatarImage = React.forwardRef<HTMLImageElement, any>(
  ({ className = "", ...props }, ref) => (
    <img
      ref={ref}
      className={`aspect-square h-full w-full object-cover ${className}`}
      {...props}
    />
  )
);
DemoAvatarImage.displayName = "DemoAvatarImage";

const DemoAvatarFallback = React.forwardRef<HTMLDivElement, any>(
  ({ className = "", ...props }, ref) => (
    <div
      ref={ref}
      className={`flex h-full w-full items-center justify-center rounded-full bg-gray-600 text-gray-100 text-sm font-medium ${className}`}
      {...props}
    />
  )
);
DemoAvatarFallback.displayName = "DemoAvatarFallback";

const AvatarPage: React.FC = () => {
  return (
    <div className="max-w-4xl">
      <DocsHeading>Avatar</DocsHeading>
      <DocsPara>
        Display user profile pictures, initials, or placeholder images in a
        circular format. Perfect for user interfaces, comment sections, and team
        member displays.
      </DocsPara>

      <DocsHeading level={2}>Installation</DocsHeading>
      <DocsPara>Add the Avatar component to your project:</DocsPara>
      <CodeBlock>npx @elixir-labs/ui add avatar</CodeBlock>

      <DocsHeading level={2}>Usage</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function MyComponent() {
  return (
    <Avatar>
      <AvatarImage src="/profile.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  );
}`}
      </CodeBlock>

      <DocsHeading level={2}>Examples</DocsHeading>

      <div className="space-y-8">
        <div>
          <DocsHeading level={3}>Basic Avatar</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center gap-4">
              <DemoAvatar>
                <DemoAvatarImage
                  src="https://github.com/shadcn.png"
                  alt="Avatar"
                />
                <DemoAvatarFallback>CN</DemoAvatarFallback>
              </DemoAvatar>
              <span className="text-gray-300">Avatar with image</span>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Avatar Fallback</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center gap-4">
              <DemoAvatar>
                <DemoAvatarImage src="/invalid-image.jpg" alt="Avatar" />
                <DemoAvatarFallback>JD</DemoAvatarFallback>
              </DemoAvatar>
              <span className="text-gray-300">
                Avatar with fallback initials
              </span>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Avatar>
  <AvatarImage src="/invalid-image.jpg" alt="Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Avatar Sizes</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center gap-6">
              <div className="text-center">
                <DemoAvatar className="h-8 w-8">
                  <DemoAvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Small"
                  />
                  <DemoAvatarFallback className="text-xs">
                    SM
                  </DemoAvatarFallback>
                </DemoAvatar>
                <div className="text-xs text-gray-400 mt-2">Small</div>
              </div>

              <div className="text-center">
                <DemoAvatar className="h-10 w-10">
                  <DemoAvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Default"
                  />
                  <DemoAvatarFallback>MD</DemoAvatarFallback>
                </DemoAvatar>
                <div className="text-xs text-gray-400 mt-2">Default</div>
              </div>

              <div className="text-center">
                <DemoAvatar className="h-12 w-12">
                  <DemoAvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Large"
                  />
                  <DemoAvatarFallback>LG</DemoAvatarFallback>
                </DemoAvatar>
                <div className="text-xs text-gray-400 mt-2">Large</div>
              </div>

              <div className="text-center">
                <DemoAvatar className="h-16 w-16">
                  <DemoAvatarImage
                    src="https://github.com/shadcn.png"
                    alt="Extra Large"
                  />
                  <DemoAvatarFallback className="text-lg">
                    XL
                  </DemoAvatarFallback>
                </DemoAvatar>
                <div className="text-xs text-gray-400 mt-2">Extra Large</div>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<Avatar className="h-8 w-8">
  <AvatarImage src="/avatar.jpg" alt="Small" />
  <AvatarFallback className="text-xs">SM</AvatarFallback>
</Avatar>

<Avatar className="h-10 w-10">
  <AvatarImage src="/avatar.jpg" alt="Default" />
  <AvatarFallback>MD</AvatarFallback>
</Avatar>

<Avatar className="h-12 w-12">
  <AvatarImage src="/avatar.jpg" alt="Large" />
  <AvatarFallback>LG</AvatarFallback>
</Avatar>

<Avatar className="h-16 w-16">
  <AvatarImage src="/avatar.jpg" alt="Extra Large" />
  <AvatarFallback className="text-lg">XL</AvatarFallback>
</Avatar>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Avatar Group</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex -space-x-2">
              <DemoAvatar className="border-2 border-gray-900">
                <DemoAvatarImage
                  src="https://github.com/shadcn.png"
                  alt="User 1"
                />
                <DemoAvatarFallback>U1</DemoAvatarFallback>
              </DemoAvatar>
              <DemoAvatar className="border-2 border-gray-900">
                <DemoAvatarImage src="/invalid.jpg" alt="User 2" />
                <DemoAvatarFallback>U2</DemoAvatarFallback>
              </DemoAvatar>
              <DemoAvatar className="border-2 border-gray-900">
                <DemoAvatarImage src="/invalid.jpg" alt="User 3" />
                <DemoAvatarFallback>U3</DemoAvatarFallback>
              </DemoAvatar>
              <DemoAvatar className="border-2 border-gray-900">
                <DemoAvatarFallback>+5</DemoAvatarFallback>
              </DemoAvatar>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<div className="flex -space-x-2">
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user1.jpg" alt="User 1" />
    <AvatarFallback>U1</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user2.jpg" alt="User 2" />
    <AvatarFallback>U2</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarImage src="/user3.jpg" alt="User 3" />
    <AvatarFallback>U3</AvatarFallback>
  </Avatar>
  <Avatar className="border-2 border-background">
    <AvatarFallback>+5</AvatarFallback>
  </Avatar>
</div>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>User Profile Card</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg border border-gray-700 max-w-md">
              <DemoAvatar className="h-12 w-12">
                <DemoAvatarImage
                  src="https://github.com/shadcn.png"
                  alt="John Doe"
                />
                <DemoAvatarFallback>JD</DemoAvatarFallback>
              </DemoAvatar>
              <div className="flex-1">
                <h3 className="font-medium text-white">John Doe</h3>
                <p className="text-sm text-gray-400">Software Engineer</p>
                <p className="text-xs text-gray-500">john.doe@example.com</p>
              </div>
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`<div className="flex items-center gap-4 p-4 rounded-lg border">
  <Avatar className="h-12 w-12">
    <AvatarImage src="/john-doe.jpg" alt="John Doe" />
    <AvatarFallback>JD</AvatarFallback>
  </Avatar>
  <div className="flex-1">
    <h3 className="font-medium">John Doe</h3>
    <p className="text-sm text-muted-foreground">Software Engineer</p>
    <p className="text-xs text-muted-foreground">john.doe@example.com</p>
  </div>
</div>`}
          </CodeBlock>
        </div>

        <div>
          <DocsHeading level={3}>Team Member List</DocsHeading>
          <div className="p-6 border border-gray-700 rounded-lg bg-gray-900/50">
            <div className="space-y-3 max-w-md">
              {[
                {
                  name: "Alice Johnson",
                  role: "Product Manager",
                  initials: "AJ",
                },
                { name: "Bob Smith", role: "Designer", initials: "BS" },
                { name: "Carol White", role: "Developer", initials: "CW" },
              ].map((member, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-2 rounded hover:bg-gray-800/50"
                >
                  <DemoAvatar className="h-8 w-8">
                    <DemoAvatarImage src="/invalid.jpg" alt={member.name} />
                    <DemoAvatarFallback className="text-xs">
                      {member.initials}
                    </DemoAvatarFallback>
                  </DemoAvatar>
                  <div>
                    <div className="font-medium text-white text-sm">
                      {member.name}
                    </div>
                    <div className="text-xs text-gray-400">{member.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CodeBlock codeLanguage="jsx">
            {`const teamMembers = [
  { name: "Alice Johnson", role: "Product Manager", initials: "AJ" },
  { name: "Bob Smith", role: "Designer", initials: "BS" },
  { name: "Carol White", role: "Developer", initials: "CW" },
];

export default function TeamList() {
  return (
    <div className="space-y-3">
      {teamMembers.map((member, index) => (
        <div key={index} className="flex items-center gap-3 p-2 rounded hover:bg-accent">
          <Avatar className="h-8 w-8">
            <AvatarImage src={\`/team/\${member.name.toLowerCase().replace(' ', '-')}.jpg\`} alt={member.name} />
            <AvatarFallback className="text-xs">{member.initials}</AvatarFallback>
          </Avatar>
          <div>
            <div className="font-medium text-sm">{member.name}</div>
            <div className="text-xs text-muted-foreground">{member.role}</div>
          </div>
        </div>
      ))}
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>

      <DocsHeading level={2}>API Reference</DocsHeading>

      <div className="space-y-6">
        <div>
          <DocsHeading level={3}>Avatar</DocsHeading>
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
                    AvatarImage and AvatarFallback components
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <DocsHeading level={3}>AvatarImage</DocsHeading>
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
                    src
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    string
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    -
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    Image source URL
                  </td>
                </tr>
                <tr>
                  <td className="border border-gray-700 px-4 py-2 font-mono text-sm">
                    alt
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    string
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    -
                  </td>
                  <td className="border border-gray-700 px-4 py-2 text-sm">
                    Alt text for accessibility
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
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <DocsHeading level={3}>AvatarFallback</DocsHeading>
          <DocsPara>
            Displayed when the image fails to load or is not provided. Typically
            shows user initials.
          </DocsPara>
        </div>
      </div>

      <DocsHeading level={2}>Source Code</DocsHeading>
      <CodeBlock codeLanguage="jsx">
        {`import React from 'react';
import { clsx } from 'clsx';

const Avatar = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
      className
    )}
    {...props}
  />
));
Avatar.displayName = 'Avatar';

const AvatarImage = React.forwardRef(({ className, ...props }, ref) => (
  <img
    ref={ref}
    className={clsx('aspect-square h-full w-full', className)}
    {...props}
  />
));
AvatarImage.displayName = 'AvatarImage';

const AvatarFallback = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={clsx(
      'flex h-full w-full items-center justify-center rounded-full bg-muted',
      className
    )}
    {...props}
  />
));
AvatarFallback.displayName = 'AvatarFallback';

export { Avatar, AvatarImage, AvatarFallback };`}
      </CodeBlock>

      <DocsHeading level={2}>Accessibility</DocsHeading>
      <DocsPara>
        The Avatar component follows accessibility guidelines:
      </DocsPara>

      <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
        <li>Always provide meaningful alt text for avatar images</li>
        <li>Fallback content is accessible to screen readers</li>
        <li>Proper semantic structure with img elements</li>
        <li>Works well with keyboard navigation</li>
        <li>Maintains proper contrast ratios for fallback text</li>
      </ul>

      <DocsHeading level={2}>Best Practices</DocsHeading>
      <div className="space-y-4">
        <div className="border border-green-700 bg-green-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-green-300 mb-2">✅ Do</h4>
          <ul className="space-y-1 text-green-200 text-sm">
            <li>Use meaningful fallback text (initials or icons)</li>
            <li>Provide descriptive alt text for images</li>
            <li>Optimize images for different screen densities</li>
            <li>Use consistent sizing across your application</li>
            <li>Consider loading states for slow network connections</li>
          </ul>
        </div>

        <div className="border border-red-700 bg-red-900/20 rounded-lg p-4">
          <h4 className="font-semibold text-red-300 mb-2">❌ Don&apos;t</h4>
          <ul className="space-y-1 text-red-200 text-sm">
            <li>Leave empty fallbacks without any content</li>
            <li>Use overly large images without optimization</li>
            <li>Forget to handle image loading errors</li>
            <li>
              Make avatars too small to be easily clickable on touch devices
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-8 p-4 border border-blue-700 bg-blue-900/20 rounded-lg">
        <h4 className="font-semibold text-blue-300 mb-2">💡 Pro Tip</h4>
        <DocsParaFaded>
          For better performance, consider using optimized image formats like
          WebP and provide multiple sizes for different use cases. You can also
          implement lazy loading for avatar lists.
        </DocsParaFaded>
      </div>
    </div>
  );
};

export default AvatarPage;
