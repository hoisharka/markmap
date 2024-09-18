import React from 'react';
import { createRoot } from 'react-dom/client';
import MarkmapHooks from './markmap-hooks';
import './style.css';

function App() {
  return (
    <div className="flex flex-col h-screen p-2">
      <MarkmapHooks />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
