import React from 'react';
import './Button.css';


function NumberButton({ buttonStyle, numbersArray }) {
    return numbersArray.map(number => <button className={buttonStyle} key={number}>{number}</button>);
  }
  
   export default NumberButton;