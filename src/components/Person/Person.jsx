import React from 'react';

const Person = (props) => {
  return (
    <div onClick={props.onclick}>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
    </div>
  );
};

export default Person;