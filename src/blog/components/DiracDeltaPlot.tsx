import React, { useState } from 'react';
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
    <div style={{ textAlign: 'center', padding: '2rem' }}>
      <h3>Dirac Delta Approximation</h3>
      <p>
        Approximating δ(x) with a Gaussian:
        <br />
        <code>δ(x) ≈ (1 / √(2πϵ)) · exp(−x² / (2ϵ))</code>
      </p>
      <label htmlFor="epsilon">ε = {epsilon.toFixed(4)}</label>
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
        data={[{ x, y, type: 'scatter', mode: 'lines', marker: { color: 'blue' } }]}
        layout={{
          width: 700,
          height: 400,
          title: `Gaussian Approximation with ε = ${epsilon.toFixed(4)}`,
          xaxis: { title: 'x', range: [-2, 2] },
          yaxis: { title: 'δ(x)', range: [0, 5] },
        }}
      />
    </div>
  );
}

