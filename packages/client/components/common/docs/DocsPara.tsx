import React from "react";

interface DocsParaWhiteProps {
  text?: string;
  children?: React.ReactNode;
}

const DocsParaWhite: React.FC<DocsParaWhiteProps> = ({ text, children }) => {
  const content = text || children;
  return (
    <p className="text-white my-3 max-w-[800px] leading-relaxed">{content}</p>
  );
};

export default DocsParaWhite;
