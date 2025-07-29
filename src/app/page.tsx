'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [captcha, setCaptcha] = useState('');
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const generateCaptcha = () => {
    const random = Math.random().toString(36).substring(2, 6).toUpperCase();
    setCaptcha(random);
    setInput('');
    setResult('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleCheck = () => {
    if (input.trim().toUpperCase() === captcha) {
      setResult('Correct!');
    } else {
      setResult('Incorrect. Please try again.');
    }
  };

  return (
    <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '4rem' }}>
      <h1>Simple CAPTCHA</h1>
      <div style={{ 
        background: '#eee', 
        padding: '1rem 2rem', 
        fontSize: '2rem', 
        letterSpacing: '0.3rem', 
        margin: '1rem 0',
        userSelect: 'none',
        borderRadius: '8px'
      }}>
        {captcha}
      </div>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type the CAPTCHA"
        style={{ padding: '0.5rem', fontSize: '1rem' }}
      />

      <div style={{ marginTop: '1rem' }}>
        <button onClick={handleCheck} style={{ marginRight: '1rem' }}>Check</button>
        <button onClick={generateCaptcha}>Refresh</button>
      </div>

      {result && <p style={{ marginTop: '1rem' }}>{result}</p>}
    </main>
  );
}
