import React from "react";

export function Input({ name, placeholder, validations, customClass, type, value, onChange }) {
  return (
    <div className="form-group">
      <input name={name} validations={validations} type={type} value={value} placeholder={placeholder} className={`form-control  input-form  ${customClass ? customClass : ""}`} onChange={onChange} />
    </div>
  );
}

export function TextArea({ customClass, placeholder, row, value , onChange}) {
  return <textarea onChange={onChange} value={value} placeholder={placeholder} className={`form-control   ${customClass ? customClass : ""}`} rows={row ? row : 10}></textarea>;
}

export function Select({ options, customClass, children }) {
  console.log(children.props.children);
  return (
    <select className={`form-select mb-4 input-form ${customClass ? customClass : ""}`}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}
