import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  codeString: string;
  codeLanguage: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ codeString, codeLanguage }) => {
  return (
    <SyntaxHighlighter language={codeLanguage} style={dracula}>
      {codeString}
    </SyntaxHighlighter>
  );
};

export default CodeBlock;
