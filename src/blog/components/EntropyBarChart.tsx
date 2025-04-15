// EntropyBarChart.tsx
import React from 'react';
import Plot from 'react-plotly.js';
import type { PlotData } from 'plotly.js';

const EntropyBarChart = () => {
  const dists = [
    { name: 'Uniform', probs: [0.25, 0.25, 0.25, 0.25] },
    { name: 'Peaked', probs: [0.85, 0.05, 0.05, 0.05] },
    { name: 'Skewed', probs: [0.5, 0.3, 0.1, 0.1] },
  ];

  const computeEntropy = (p: number[]) => -p.reduce((sum, pi) => pi > 0 ? sum + pi * Math.log2(pi) : sum, 0);

  const bars: Partial<PlotData>[] = dists.map(dist => ({
    x: [dist.name],
    y: [computeEntropy(dist.probs)],
    type: 'bar',
    name: dist.name,
  }));

  return (
    <Plot
      data={bars}
      layout={{
        title: 'Entropy of Different Distributions',
        yaxis: { title: 'Entropy (bits)', range: [0, 2.2] },
        barmode: 'group',
      }}
    />
  );
};

export default EntropyBarChart;
