import React from 'react';

export default ({ input, label }) => {
  // The input prop has functions keys like value and onChange.
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
