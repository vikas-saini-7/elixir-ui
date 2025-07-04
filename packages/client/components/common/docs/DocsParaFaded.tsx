import React from "react";

interface DocsParaFadedProps {
  text?: string;
  children?: React.ReactNode;
}

const DocsParaFaded: React.FC<DocsParaFadedProps> = ({ text, children }) => {
  const content = text || children;
  return (
    <p className="text-gray-500 my-3 max-w-[800px] leading-relaxed">
      {content}
    </p>
  );
};

export default DocsParaFaded;
