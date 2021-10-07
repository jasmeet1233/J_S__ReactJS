import React, { useReducer, useState } from "react";
import CompA from "./CompA";
import CompB from './CompB'

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

export const CountContext = React.createContext();

const App = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider
      value={{ dispatch, count }}
    >
      <div>
        <h1>{count}</h1>
        <CompA />
        <CompB />
        {/* <Compc /> */}
      </div>
    </CountContext.Provider>
  );
};

export default App;
