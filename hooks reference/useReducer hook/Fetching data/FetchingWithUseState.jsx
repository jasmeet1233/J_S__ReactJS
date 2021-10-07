import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchingWithUseState = () => {
  const [loading, setLoading] = useState(true);
  const [post, setPost] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        setPost(response.data);
        setLoading(false);
        setError("");
      })
      .catch((err) => {
        setLoading(false);
        setPost({});
        setError("sommww wrong");
      });
  }, []);

  return (
    <div>
      <h3>{loading ? "loading" : post.title}</h3>
      <h3>{error ? error : null}</h3>
    </div>
  );
};

export default FetchingWithUseState;
