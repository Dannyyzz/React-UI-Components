import React from 'react';
import './Button.css';


function NumberButton({ buttonStyle, numbersArray }) {
    return (
      <div className="number-buttons-container">
        {
          numbersArray.map(number => {
            return <button className={buttonStyle} key={number}>{number}</button>;
          })
        }
      </div>
    );
  }
  
   export default NumberButton;