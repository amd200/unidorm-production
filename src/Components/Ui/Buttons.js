import React from "react";
import { NavLink } from "react-router-dom";

export function PrimaryBtn({ title, to, customClass, icon, onClick, disabled, isSubmit }) {
  if (isSubmit) {
    return (
      <button type="submit" disabled={disabled} onClick={onClick} className={`btn btn-primary2 text-white d-inline-flex align-items-center justify-content-center text-decoration-none ${customClass ? customClass : ""}`}>
        {title}
        {icon}
      </button>
    );
  }

  return (
    <NavLink disabled={disabled} to={to} onClick={onClick} className={`btn btn-primary2 text-white d-inline-flex align-items-center justify-content-center text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
      {icon}
    </NavLink>
  );
}

export function SecondaryBtn({ title, to, customClass, onClick, disabled, isSubmit }) {
  if (isSubmit) {
    return (
      <button type="submit" disabled={disabled} onClick={onClick} className={`btn btn-orange text-white text-decoration-none ${customClass ? customClass : ""}`}>
        {title}
      </button>
    );
  }

  return (
    <NavLink disabled={disabled} onClick={onClick} to={to} className={`btn btn-orange text-white text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
    </NavLink>
  );
}

export function DangerBtn({ title, to, customClass, onClick, isSubmit }) {
  if (isSubmit) {
    return (
      <button type="submit" onClick={onClick} className={`btn btn-danger text-decoration-none ${customClass ? customClass : ""}`}>
        {title}
      </button>
    );
  }

  return (
    <NavLink onClick={onClick} to={to} className={`btn btn-danger text-decoration-none ${customClass ? customClass : ""}`}>
      {title}
    </NavLink>
  );
}
