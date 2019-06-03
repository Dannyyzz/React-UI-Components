import React from 'react';
import './Display.css';

function CalculatorDisplay({ result }) {
    return (
      <div className="display">{ result }</div>
    );
  }
  
   export default CalculatorDisplay;