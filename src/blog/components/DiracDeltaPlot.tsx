import  { useState } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from 'plotly.js-basic-dist';

const Plot = createPlotlyComponent(Plotly);

const gaussian = (x: number, epsilon: number) => {
  return (1 / Math.sqrt(2 * Math.PI * epsilon)) * Math.exp(-x * x / (2 * epsilon));
};

export default function DiracDeltaPlot() {
  const [epsilon, setEpsilon] = useState(0.1);
  const x = Array.from({ length: 500 }, (_, i) => -2 + (4 * i) / 499);
  const y = x.map(xVal => gaussian(xVal, epsilon));

  return (
    <div style={{ textAlign: 'center', padding: '2rem', background: 'var(--card-bg)', borderRadius: 'var(--border-radius)', boxShadow: '0 0 10px var(--card-shadow)' }}>
      <h3 style={{ color: 'var(--fg)' }}>Dirac Delta Approximation</h3>
      <p style={{ color: 'var(--fg)' }}>
        Approximating δ(x) with a Gaussian:
        <br />
        <code style={{ backgroundColor: 'var(--code-bg)', padding: '0.2rem 0.5rem', borderRadius: '4px' }}>
          δ(x) ≈ (1 / √(2πϵ)) · exp(−x² / (2ϵ))
        </code>
      </p>
      <label htmlFor="epsilon" style={{ color: 'var(--fg)' }}>ε = {epsilon.toFixed(4)}</label>
      <br />
      <input
        id="epsilon"
        type="range"
        min="0.001"
        max="0.5"
        step="0.001"
        value={epsilon}
        onChange={e => setEpsilon(parseFloat(e.target.value))}
        style={{ width: '300px', margin: '1rem 0' }}
      />
      <Plot
        data={[{ x, y, type: 'scatter', mode: 'lines', marker: { color: 'var(--accent)' } }]}
        layout={{
          width: 700,
          height: 400,
          paper_bgcolor: 'transparent',
          plot_bgcolor: 'transparent',
          font: { color: 'var(--fg)' },
          title: `Gaussian Approximation with ε = ${epsilon.toFixed(4)}`,
          xaxis: { title: 'x', range: [-2, 2], color: 'var(--fg)' },
          yaxis: { title: 'δ(x)', range: [0, 5], color: 'var(--fg)' },
        }}
      />
    </div>
  );
}
