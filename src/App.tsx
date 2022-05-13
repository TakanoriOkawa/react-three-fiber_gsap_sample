import React from 'react';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import InputComponent from './components/InputComponent';

function App() {
  return (
    <div className="App">
      <InputComponent />
      <ButtonComponent clickMethod={() => {console.log("hoge")}}/>
    </div>
  );
}

export default App;
