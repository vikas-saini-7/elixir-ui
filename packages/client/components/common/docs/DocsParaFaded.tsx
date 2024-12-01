import React from "react";

interface DocsParaFadedProps {
  text: string;
}

const DocsParaFaded: React.FC<DocsParaFadedProps> = ({ text }) => {
  return <h2 className="text-gray-500 my-3 max-w-[800px]">{text}</h2>;
};

export default DocsParaFaded;
