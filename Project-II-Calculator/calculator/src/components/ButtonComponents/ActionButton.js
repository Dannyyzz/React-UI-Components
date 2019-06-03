import React from 'react';
import './Button.css';

function ActionButton({ buttonStyle, values }) {
    return values.map(value => <button key={value} className={buttonStyle}>{value}</button>);
  }
  
export default ActionButton;