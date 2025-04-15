
const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre
      style={{
        backgroundColor: 'var(--code-bg)',
        color: 'var(--code-fg)',
        padding: '1rem',
        borderRadius: 'var(--border-radius)',
        overflowX: 'auto',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.95rem',
        lineHeight: 1.6,
        marginBottom: '1.5rem'
      }}
    >
      <code>{children}</code>
    </pre>
  );
};

export default CodeBlock;
