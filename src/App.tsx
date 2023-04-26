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
          Приложение сделанное на REACT.
        </p>

        <button onClick={onClose}>Close</button>
      </header>
    </div>
  );
}

export default App;
