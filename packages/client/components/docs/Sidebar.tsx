import Link from "next/link";
import React from "react";

const components = [
  {
    name: "Alert",
    slug: "alert",
  },
  {
    name: "Avatar",
    slug: "avatar",
  },
  {
    name: "Badge",
    slug: "badge",
  },
  {
    name: "Button",
    slug: "button",
  },
  {
    name: "Card",
    slug: "card",
  },
  {
    name: "Input",
    slug: "input",
  },
];

const installation = [
  {
    name: "React",
    slug: "reactjs",
  },
  {
    name: "Vite",
    slug: "vite",
  },
  {
    name: "Next.js",
    slug: "nextjs",
  },
];

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/6 h-[calc(100vh-65px)] overflow-auto p-4 border-r border-gray-500/30 sticky top-[69px]">
      {/* list 1 */}
      <div className="mb-4">
        <h1 className="font-bold mb-2">Getting Started</h1>
        <ul className="text-sm flex  flex-col gap-1">
          <Link href="/docs/introduction">
            <li>Introduction</li>
          </Link>
          <Link href="/docs/installation">
            <li>Installation</li>
          </Link>
        </ul>
      </div>

      {/* list 2 */}
      <div className="mb-4">
        <h1 className="font-bold mb-2">Installation</h1>
        <ul className="text-sm flex  flex-col gap-1">
          {installation.map((install, idx) => (
            <Link key={idx} href={`/docs/installation/${install.slug}`}>
              <li>{install.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* list 3 */}
      <div className="mb-4">
        <h1 className="font-bold mb-2">Components</h1>
        <ul className="text-sm flex  flex-col gap-1">
          {components.map((component, idx) => (
            <Link key={idx} href={`/docs/components/${component.slug}`}>
              <li>{component.name}</li>
            </Link>
          ))}
        </ul>
      </div>

      {/* list 4 */}
      <div className="mb-4">
        <h1 className="font-bold mb-2">Templates</h1>
        <ul className="text-sm flex  flex-col gap-1">
          <Link href="/docs/templates">
            <li>Templates</li>
          </Link>
        </ul>
      </div>

      {/* list 5 */}
      <div className="mb-4">
        <h1 className="font-bold mb-2">More</h1>
        <ul className="text-sm flex  flex-col gap-1">
          <Link href="/docs/changelog">
            <li>Changelog</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
