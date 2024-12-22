import DocsHeading from "@/components/common/docs/DocsHeading";
import DocsParaWhite from "@/components/common/docs/DocsPara";
import DocsParaFaded from "@/components/common/docs/DocsParaFaded";
import Link from "next/link";
import React from "react";

const page: React.FC = () => {
  return (
    <div className="">
      <div className="mb-12">
        <DocsHeading text={"Welcome to Elixir UI"} />
        <DocsParaFaded text="Elixir UI is a modern library designed to simplify your web development. It provides a collection of pre-built, customizable UI components that can be seamlessly integrated into your projects. Whether you're building a simple website or a complex web application, Elixir UI is here to help you create beautiful and responsive interfaces." />
      </div>

      <div className="mb-12">
        <DocsHeading text={"Explore Components"} />
        <div>components here..</div>
      </div>

      <div className="mb-12">
        <DocsHeading text={"Want to use these component?"} />
        <Link href="/docs/installation">
          <span className="text-blue-500 underline">Go to Installation</span>
        </Link>
      </div>

      <div className="mb-12">
        <DocsHeading text={"Contribute"} />
        <h2 className="text-gray-500 my-3 max-w-[800px]">
          Elixir UI is an open-source project, and we welcome contributions from
          the community. Whether you want to add a new component or improve
          existing ones, we encourage you to get involved. Check out our{" "}
          <Link href="/docs/contribution-guidelines">
            <span className="text-blue-500 underline">
              contribution guidelines
            </span>
          </Link>{" "}
          to get started.
        </h2>
      </div>
    </div>
  );
};

export default page;
