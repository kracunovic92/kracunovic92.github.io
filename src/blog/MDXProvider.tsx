import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './components/CodeBlock';
import Latex from './components/Latex';


const components = {
  code: (props: any) => {
    const language = props.className?.replace('language-', '') || 'text';
    return <CodeBlock language={language}>{props.children}</CodeBlock>;
  },
  inlineCode: (props: any) => (
    <code style={{ background: '#eee', padding: '2px 4px', borderRadius: '4px' }}>
      {props.children}
    </code>
  ),
  Latex,
};

const MDXProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={components}>{children}</MDXProvider>
);

export default MDXProviderWrapper;
