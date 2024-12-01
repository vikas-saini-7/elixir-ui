import React from "react";

interface DocsHeadingProps {
  text: string;
}

const DocsHeading: React.FC<DocsHeadingProps> = ({ text }) => {
  return <h2 className="font-bold text-3xl mb-6">{text}</h2>;
};

export default DocsHeading;
