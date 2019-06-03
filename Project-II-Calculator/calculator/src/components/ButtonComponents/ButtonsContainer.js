import React from 'react';
import NumberButton from './NumberButton.js';
import ActionButton from './ActionButton.js';

 function ButtonsContainer() {
  return (
    <div className="buttons-container">

      <div className="buttons-grid-left">
        <ActionButton buttonStyle="btn-wide" values={['clear']}  />

        <div className="number-buttons-container">

        <NumberButton buttonStyle="number-button" numbersArray={[7,8,9,4,5,6,1,2,3]}/>

        </div>

        <ActionButton buttonStyle="btn-wide" values={[0]} />
      </div>

      <div className="buttons-grid-right">
        <ActionButton buttonStyle="btn-wide" values={['÷','⨉', '-', '+', '=']} />
      </div>

    </div>
  );
}

 export default ButtonsContainer;