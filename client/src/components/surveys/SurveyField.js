import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {
  // The input prop has functions keys like value and onChange.
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};
