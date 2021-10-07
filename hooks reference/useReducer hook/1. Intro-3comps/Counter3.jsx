import React, { useReducer } from "react";

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

const Counter3 = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
      <h2>Counter 1: {count}</h2>
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("subtract")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <h2>Counter 2: {count2}</h2>
      <button onClick={() => dispatch2("add")}>+</button>
      <button onClick={() => dispatch2("subtract")}>-</button>
      <button onClick={() => dispatch2("reset")}>reset</button>  
    </div>
  );
};

export default Counter3;
