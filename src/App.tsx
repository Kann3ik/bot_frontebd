import React from 'react';
import './App.css';
// @ts-ignore
const tg = window.Telegram.WebApp;

function App() {

  const onClose = () => {
    tg.close();
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>

        <button onClick={onClose}>Close</button>
      </header>
    </div>
  );
}

export default App;
