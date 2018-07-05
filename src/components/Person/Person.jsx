import React from 'react';

const Person = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h3>{props.age}</h3>
      <input 
        type='text'
        onChange={props.onchange}
      />
    </div>
  );
};

export default Person;