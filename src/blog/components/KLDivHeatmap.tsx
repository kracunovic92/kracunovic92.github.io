// KLDivHeatmap.tsx
import React from 'react';
import Plot from 'react-plotly.js';

const KLDivHeatmap = () => {
  const values = [];
  const steps = 50;
  const xs = Array.from({ length: steps }, (_, i) => (i + 1) / steps);
  const ys = Array.from({ length: steps }, (_, i) => (i + 1) / steps);

  for (let i = 0; i < steps; i++) {
    const row = [];
    for (let j = 0; j < steps; j++) {
      const p = xs[i], q = ys[j];
      const dkl = p === 0 || q === 0 || p === 1 || q === 1 ? 0 : p * Math.log2(p / q) + (1 - p) * Math.log2((1 - p) / (1 - q));
      row.push(dkl);
    }
    values.push(row);
  }

  return (
    <Plot
      data={[{
        z: values,
        x: xs,
        y: ys,
        type: 'heatmap',
        colorscale: 'Viridis',
      }]}
      layout={{
        title: 'KL Divergence D(P || Q)',
        xaxis: { title: 'Q (model)' },
        yaxis: { title: 'P (truth)' },
      }}
    />
  );
};

export default KLDivHeatmap;