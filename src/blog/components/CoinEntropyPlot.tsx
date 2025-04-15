// CoinEntropyPlot.tsx
import React, { useState } from 'react';
import Plot from 'react-plotly.js';

const CoinEntropyPlot = () => {
  const bias = Array.from({ length: 100 }, (_, i) => i / 100);
  const entropy = bias.map(p => p === 0 || p === 1 ? 0 : -p * Math.log2(p) - (1 - p) * Math.log2(1 - p));

  return (
    <Plot
      data={[{
        x: bias,
        y: entropy,
        type: 'scatter',
        mode: 'lines',
        name: 'Entropy'
      }]}
      layout={{
        title: 'Entropy of a Biased Coin',
        xaxis: { title: 'P(Heads)', range: [0, 1] },
        yaxis: { title: 'Entropy (bits)', range: [0, 1] },
      }}
    />
  );
};

export default CoinEntropyPlot;