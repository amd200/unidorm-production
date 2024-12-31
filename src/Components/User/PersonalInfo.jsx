import React, { useEffect, useState } from "react";
import { Input } from "../Ui/Fields";
import { Button } from "bootstrap";
import { PrimaryBtn } from "../Ui/Buttons";

const PersonalInfo = ({ user, handleInputChange }) => {
  return (
    <div className="personal-info">
      <h3 className="mb-3 sub-title">Personal Information</h3>
      <div className="row">
        <div className="col-12 mb-4">
          <Input type={"text"} placeholder={"Name"} value={user.name} onChange={(e) => handleInputChange("name", e.target.value)} />
        </div>
        <div className="col-12 mb-4">
          <Input type={"email"} placeholder={"Email"} onChange={(e) => handleInputChange("email", e.target.value)} />
        </div>
        {/* <div className="col-12 mb-4">
          <Input type={"text"} placeholder={"Phone Number"} value={user.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e.target.value)} />
        </div> */}
      </div>
    </div>
  );
};

export default PersonalInfo;
