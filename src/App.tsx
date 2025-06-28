import React, { useState } from 'react';
import './App.css';

const chakraColors = [
  '#ff0000', // Root
  '#ff7f00', // Sacral
  '#ffff00', // Solar Plexus
  '#00ff00', // Heart
  '#0000ff', // Throat
  '#4b0082', // Third Eye
  '#8b00ff', // Crown
];

function App() {
  const [currentChakra, setCurrentChakra] = useState<number | null>(null);

  return (
    <div className="App" style={{ backgroundColor: currentChakra !== null ? chakraColors[currentChakra] : '#000', color: '#fff', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <h1>🌀 SoulLink: Chakra Aura Visualizer</h1>
      <p>Tap a chakra to reveal its energy color</p>
      <div style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
        {chakraColors.map((color, index) => (
          <button
            key={index}
            onClick={() => setCurrentChakra(index)}
            style={{
              backgroundColor: color,
              border: currentChakra === index ? '3px solid white' : '1px solid gray',
              width: 40,
              height: 40,
              borderRadius: '50%',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;

