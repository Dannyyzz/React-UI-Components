import React from 'react';
import './App.css';
import ButtonsContainer from './components/ButtonComponents/ButtonsContainer.js';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay.js';


const App = () => {
  return (
    <div className="calculator">
    <CalculatorDisplay result="Example" />
    <ButtonsContainer />
    </div>
  );
};

export default App;
