import React from "react";

import "./styles.css";

function Input({ type, id, placeholder, value, handleChange, label }) {
  return (
    <>
      <div className="field">
        <label className="input-label" htmlFor={id}>
          {label}
        </label>
        <input
          className="input-field"
          type={type}
          name={id}
          id={id}
          value={value}
          placeholder={placeholder}
          onChange={handleChange}
        />
      </div>
    </>
  );
}

export default Input;
