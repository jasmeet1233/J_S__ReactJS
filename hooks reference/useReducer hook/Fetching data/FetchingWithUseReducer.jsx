import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: true,
  error: "",
  post: {},
};

const reducer = (state, action) => {
  switch (action.status) {
    case "Fetch_Success":
      return { loading: false, error: "", post: action.data };
    case "Fetch_Fail":
      return {
        loading: false,
        error: "something went wrong",
        post: action.data,
      };
  }
};

// useEffect can dispatch 2 action, fetch_fail, fetch_success, with their respective data
const FetchingWithUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ status: "Fetch_Success", data: response.data });
      })
      .catch((err) => {
        dispatch({ status: "Fetch_Fail", data: {} });
      });
  }, []);

  return (
    <div>
      <h3>{state.loading ? "loading" : state.post.title}</h3>
      <h3>{state.error ? state.error : null}</h3>
    </div>
  );
};

export default FetchingWithUseReducer;
