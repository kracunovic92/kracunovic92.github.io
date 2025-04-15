import React from 'react';
import { MDXProvider } from '@mdx-js/react';
import CodeBlock from './components/CodeBlock';
import Latex from './components/Latex';

const components = {
  code: (props: any) => {
    return <CodeBlock>{props.children}</CodeBlock>;
  },
  inlineCode: (props: any) => (
    <code style={{
      background: 'var(--code-bg)',
      color: 'var(--code-fg)',
      padding: '0.2rem 0.4rem',
      borderRadius: '4px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.95rem'
    }}>
      {props.children}
    </code>
  ),
  Latex,
};

const MDXProviderWrapper = ({ children }: { children: React.ReactNode }) => (
  <MDXProvider components={components}>
    <main >
      {children}
    </main>
  </MDXProvider>
);

export default MDXProviderWrapper;
