import React, {useContext} from "react";
import { CountContext } from "../src/App";

const CompD = () => {
  const valuesObj = useContext(CountContext);
  const { dispatch, count } = valuesObj;
  return (
    <div>
      <button onClick={() => dispatch("add")}>+</button>
      <button onClick={() => dispatch("subtract")}>-</button>
      <button onClick={() => dispatch("reset")}>reset</button>
    </div>
  );
};

export default CompD;
