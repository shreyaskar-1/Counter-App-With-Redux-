import React from 'react';
import { incNumber, decNumber } from './actions/index';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

const App = () => {
  const count = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    // Handle change if necessary
  };

  return (
    <div className="app-container">
      <div className="counter-container">
        <h1>Increment/Decrement Counter</h1>
        <h4>Using React and Redux</h4>
        <div className='quantity'>
          <a className="quantity_minus" title='Decrement' onClick={() => dispatch(decNumber())}>
            <span>-</span>
          </a>
          <input name='quantity' type='number' className="quantity_input" value={count} onChange={handleChange} />
          <a className="quantity_plus" title='Increment' onClick={() => dispatch(incNumber())}>
            <span>+</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
