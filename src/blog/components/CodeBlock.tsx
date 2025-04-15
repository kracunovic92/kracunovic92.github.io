import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  language: string;
  children: string | string[];
};

const CodeBlock = ({ language, children }: Props) => (
  <SyntaxHighlighter language={language} style={dracula} wrapLongLines>
    {typeof children === 'string' ? children.trim() : children}
  </SyntaxHighlighter>
);

export default CodeBlock;
