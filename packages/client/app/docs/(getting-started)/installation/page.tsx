import CodeBlock from "@/components/common/docs/CodeBlock";
import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsPara from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  return (
    <div>
      {/* ===================== */}
      <DocsHeading text={"Installation"} />

      <div className="mb-12">
        <DocsPara text="Run below command to configure your app with Elixir UI." />
        <CodeBlock
          codeString="npx @elixir-labs/ui@latest init"
          codeLanguage="bash"
        />
        <DocsParaFaded
          text="This command will install the dependencies. Elixir UI uses
          tailwindcss, clsx and framer-motion. This will also create necessary
          files and folders in your project."
        />
      </div>

      <div className="mb-12">
        <DocsPara text="Add Component to your project." />
        <CodeBlock
          codeString="npx @elixir-labs/ui add <component-name>"
          codeLanguage="bash"
        />
        <DocsParaFaded text="Replace <component-name> with the component you want to add." />
      </div>

      {/* ===================== */}
      <DocsHeading text={"Example"} />
      <div className="mb-12">
        <CodeBlock
          codeString="npx @elixir-labs/ui add toast"
          codeLanguage="bash"
        />
        <DocsParaFaded text="This command will add Toast.jsx to your project." />
      </div>

      {/* ===================== */}
      <Link href="/docs/components">
        <span className="text-blue-500 underline">Browse Components</span>
      </Link>
    </div>
  );
};

export default page;
