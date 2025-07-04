import React from "react";

interface DocsHeadingProps {
  text?: string;
  children?: React.ReactNode;
  level?: 1 | 2 | 3 | 4;
}

const DocsHeading: React.FC<DocsHeadingProps> = ({
  text,
  children,
  level = 1,
}) => {
  const content = text || children;

  const headingClasses = {
    1: "font-bold text-3xl mb-6",
    2: "font-bold text-2xl mb-4 mt-8",
    3: "font-bold text-xl mb-3 mt-6",
    4: "font-bold text-lg mb-2 mt-4",
  };

  const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;

  return <HeadingTag className={headingClasses[level]}>{content}</HeadingTag>;
};

export default DocsHeading;
