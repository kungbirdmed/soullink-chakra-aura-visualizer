import React, { useState } from 'react';
import './App.css';

const moodToChakraMap: { [key: string]: { chakra: string; color: string } } = {
  grounded: { chakra: 'Root', color: '#ff0000' },
  creative: { chakra: 'Sacral', color: '#ff7f00' },
  confident: { chakra: 'Solar Plexus', color: '#ffff00' },
  loving: { chakra: 'Heart', color: '#00ff00' },
  expressive: { chakra: 'Throat', color: '#0000ff' },
  intuitive: { chakra: 'Third Eye', color: '#4b0082' },
  divine: { chakra: 'Crown', color: '#8b00ff' },
};

function App() {
  const [mood, setMood] = useState<string | null>(null);
  const selected = mood ? moodToChakraMap[mood] : null;

  return (
    <div
      className="App"
      style={{
        backgroundColor: selected ? selected.color : '#111',
        color: '#fff',
        minHeight: '100vh',
        transition: 'background 0.5s ease',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <h1>💫 SoulLink: Chakra Aura Visualizer</h1>
      <p>How do you feel right now? Choose to reveal your aura</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '1rem' }}>
        {Object.keys(moodToChakraMap).map((m) => (
          <button
            key={m}
            onClick={() => setMood(m)}
            style={{
              background: moodToChakraMap[m].color,
              color: '#000',
              padding: '10px 16px',
              borderRadius: '12px',
              border: selected?.chakra === moodToChakraMap[m].chakra ? '2px solid white' : '1px solid #333',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            {m}
          </button>
        ))}
      </div>

      {selected && (
        <div style={{ marginTop: '2rem' }}>
          <h2>{selected.chakra} Chakra Activated</h2>
          <p style={{ fontStyle: 'italic' }}>Aura Color: {selected.color}</p>
        </div>
      )}
    </div>
  );
}

export default App;

