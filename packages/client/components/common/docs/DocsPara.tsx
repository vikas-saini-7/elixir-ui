import React from "react";

interface DocsParaWhiteProps {
  text: string;
}

const DocsParaWhite: React.FC<DocsParaWhiteProps> = ({ text }) => {
  return <h2 className="text-white my-3 max-w-[800px]">{text}</h2>;
};

export default DocsParaWhite;
