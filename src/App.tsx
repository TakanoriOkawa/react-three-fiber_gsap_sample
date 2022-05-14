import React from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';
import MainCanvas from './components/MainCanvas';

function App() {
  return (
    <div id="canvas-container">
      <InputComponent />
      <ButtonComponent clickMethod={() => {console.log("hoge")}} />
      <MainCanvas />
    </div>
  );
}

export default App;
