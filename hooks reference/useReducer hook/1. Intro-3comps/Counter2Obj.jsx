import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state ,firstCounter: state.firstCounter + action.value };
      break;
    case "decrement":
      return { ...state, firstCounter: state.firstCounter - action.value };
      break;
    case "increment2":
      return { ...state, secondCounter: state.secondCounter + action.value };
      break;
    case "decrement2":
      return { ...state, secondCounter: state.secondCounter - action.value };
      break;
    case "reset":
      return initialState;
      break;
    default:
      return state;
  }
};

const Counter2Obj = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h2>{count.firstCounter}</h2>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        +
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        -
      </button>
      <button onClick={() => dispatch({ type: "increment", value: 5 })}>
        Increase by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrease by 5
      </button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>

      <div>
        <h2>{count.secondCounter}</h2>
        <button onClick={() => dispatch({ type: "increment2", value: 1 })}>
          increace by 2
        </button>
        <button onClick={() => dispatch({ type: "decrement2", value: 1 })}>
          decrease by 2
        </button>
      </div>
    </div>
  );
};

export default Counter2Obj;