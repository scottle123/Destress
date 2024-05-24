// src/App.js
import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import DestressList from './components/DestressList';
import { simpleSolutions, complexSolutions } from './data/destressData';

function App() {
  const [showSimple, setShowSimple] = useState(true);

  const handleShowSimple = () => setShowSimple(true);
  const handleShowComplex = () => setShowSimple(false);

  return (
    <div className="App">
      <Header />
      <div className="buttons">
        <button onClick={handleShowSimple}>Simple Solutions</button>
        <button onClick={handleShowComplex}>Complex Solutions</button>
      </div>
      <div className="content">
        {showSimple ? (
          <DestressList title="Simple Solutions" items={simpleSolutions} />
        ) : (
          <DestressList title="Complex Solutions" items={complexSolutions} />
        )}
      </div>
    </div>
  );
}

export default App;