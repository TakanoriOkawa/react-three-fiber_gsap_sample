import React from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import MainCanvas from './components/MainCanvas';
import Parent from './components/test/Parent';

function App() {
  return (
    <div id="canvas-container">
      <MainCanvas />
    </div>
  );
}

export default App;
