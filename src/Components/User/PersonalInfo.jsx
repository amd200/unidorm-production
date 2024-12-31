import React, { useEffect, useState } from "react";
import { Input, TextArea } from "../Ui/Fields";
import { Button } from "bootstrap";
import { PrimaryBtn } from "../Ui/Buttons";

const PersonalInfo = ({ user, handleInputChange }) => {
  return (
    <div className="personal-info">
      <h3 className="mb-3 sub-title">Personal Information</h3>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <Input type={"text"} placeholder={"Name"} value={user.name} onChange={(e) => handleInputChange("name", e.target.value)} />
        </div>
        <div className="col-lg-6 mb-4">
          <Input type={"text"} placeholder={"Phone Number"} value={user.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e.target.value)} />
        </div>
        <div className="col-12 mb-4">
          <Input type={"email"} placeholder={"Email"} value={user.email} onChange={(e) => handleInputChange("email", e.target.value)} />
        </div>
        <div className="col-12 mb-4">
          <TextArea placeholder={"Bio"} value={user.bio} onChange={(e) => handleInputChange("bio", e.target.value)} />
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
