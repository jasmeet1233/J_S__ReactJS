import React, { useState, useEffect } from "react";
import { data } from "../../data";
import { Link, useParams } from "react-router-dom";
const Person = () => {
  const [defaultName, setDefaultName] = useState("Default Name");
  const {id} = useParams();
  const updatedPerson = data.find((person) => person.id === parseInt(id));

  useEffect(() => {
    setDefaultName(updatedPerson.name);
  }, []);

  return (
    <>
    <div>
      <h2>{defaultName}</h2>
    </div>
    <Link to = '/people'>Go Back</Link>
    </>
  );
};

export default Person;
