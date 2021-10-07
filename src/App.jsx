import React, { useReducer, useState, useEffect } from "react";
// import Index from "../tutorial/12-memo-useMemo-useCallback/setup/index";
// import axios from "axios";
import { createStore } from "redux";

const initialState = {
  count: 0
}

const reducer = (state, action) => {
  if(action.type === 'add'){
    return {count: state.count + 1}
  }
}

const store = createStore(reducer, initialState);

const App = () => {
  
  return (
    <>
      <div>{sto}</div>
    </>
  );
};

export default App;
