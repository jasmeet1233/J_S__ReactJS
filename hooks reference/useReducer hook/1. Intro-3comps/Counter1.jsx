import React, {useReducer} from 'react';

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "add":
      return state + 1;
      break;
    case "subtract":
      return state - 1;
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
  }
};

const Counter1 = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <h2>{count}</h2>
        <button onClick={() => dispatch("add")}>+</button>
        <button onClick={() => dispatch("subtract")}>-</button>
        <button onClick={() => dispatch("reset")}>reset</button>
      </div>
    );
}

export default Counter1
