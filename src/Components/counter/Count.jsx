import React, { useState } from 'react';
import './Count.css';

const Count = () => {
  let [count, setCount] = useState(0);


  const handleIncrement = (() => {
    setCount(count + 1);
  });

  const handleDecrement = (() => {
    // if (count <= 0) return;
    // setCount(count - 1);

    !(count <= 0) ? setCount(count - 1) : count = 0;
  });

  return (
    <>
      <div className="section">
        <h1 className='heading'>Counter App</h1>
        <p className='counter'>{count}</p>
        <div className='btn__section'>
          <button type='button' className='btn' onClick={handleDecrement} >-</button>
          <button type='button' className='btn' onClick={handleIncrement} >+</button>
        </div>
      </div>
    </>
  );
};

export default Count;