import React from 'react';
import NumberButton from './NumberButton.js';
import ActionButton from './ActionButton.js';

 function ButtonsContainer() {
  return (
    <div className="buttons-container">
      <div className="buttons-grid-left">
        <ActionButton buttonStyle="btn-wide" values={['clear']}  />
        <NumberButton buttonStyle="number-button-grid" numbersArray={[3,2,1,6,5,4,9,8,7]}/>
        <ActionButton buttonStyle="btn-wide" values={[0]} />
      </div>
      <div className="buttons-grid-right">
        <ActionButton buttonStyle="btn-wide" values={['÷','⨉', '-', '+', '=']} />
      </div>
    </div>
  );
}

 export default ButtonsContainer;