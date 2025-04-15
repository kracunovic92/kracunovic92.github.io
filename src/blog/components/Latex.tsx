import katex from 'katex';
import 'katex/dist/katex.min.css';

type Props = {
  math: string;
  block?: boolean;
};

const Latex = ({ math, block = false }: Props) => {
  const html = katex.renderToString(math, {
    throwOnError: false,
    displayMode: block,
  });

  return (
    <span
      dangerouslySetInnerHTML={{ __html: html }}
      style={{
        display: block ? 'block' : 'inline',
        margin: block ? '1rem 0' : '0',
        textAlign: block ? 'center' : 'inherit',
      }}
    />
  );
};
export const InlineLatex = ({ children }: { children: string }) => (
  <Latex math={children} />
);

export const BlockLatex = ({ children }: { children: string }) => (
  <Latex math={children} block />
);

export default Latex;

