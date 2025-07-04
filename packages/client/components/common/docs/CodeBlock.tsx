import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
  codeString?: string;
  codeLanguage?: string;
  children?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({
  codeString,
  codeLanguage = "bash",
  children,
}) => {
  const code = codeString || children || "";

  return (
    <div className="my-4">
      <SyntaxHighlighter
        language={codeLanguage}
        style={dracula}
        className="rounded-lg"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeBlock;
