import React from "react";
import MultiSelect from "react-select";
import { Input, TextArea } from "../Ui/Fields";

function BasicInfo({ handleInputChange, propertyDetails, propertyTypeRef, finishTypeRef, statusRef }) {
  return (
    <section className="basicInfo mb-4">
      <h3 className="mb-3">Basic Info</h3>
      <div className="row">
        {/* Name */}
        <div className="col-md-6 mb-4">
          <Input type={"text"} value={propertyDetails.name} onChange={(e) => handleInputChange("name", e.target.value)} placeholder="Property Name" />
          <p className="note mt-1 mb-0">Enter the property's name (e.g., Elegant Apartment).</p>
        </div>
        {/* Phone Number */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} value={propertyDetails.phoneNumber} onChange={(e) => handleInputChange("phoneNumber", e.target.value)} placeholder="Phone Number" />
          <p className="note mt-1 mb-0">Enter a valid contact number.</p>
        </div>
        {/* Description */}
        <div className="col-12 mb-4">
          <TextArea value={propertyDetails.description} onChange={(e) => handleInputChange("description", e.target.value)} placeholder="Write a brief description of the property" />
          <p className="note mt-1 mb-0">Provide an overview of the property.</p>
        </div>
        {/* Property Type */}
        <div className="col-md-6 mb-4">
          <select className="wide mb-0" ref={propertyTypeRef}>
            <option value="0" disabled selected>
              -- Property Type --
            </option>
            <option value="APARTMENT">Apartment</option>
            <option value="VILLA">Villa</option>
            <option value="ARCHITECTURE">Architecture</option>
          </select>
          <p className="note mt-1 mb-0">Select the type of property (e.g., Apartment, Villa).</p>
        </div>
        {/* Area */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} value={propertyDetails.area} onChange={(e) => handleInputChange("area", e.target.value)} placeholder="Size (m²)" />
          <p className="note mt-1 mb-0">Enter the property's area in square meters.</p>
        </div>
        {/* Bedrooms */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} placeholder="Number of Bedrooms" value={propertyDetails.bedroomNumber} onChange={(e) => handleInputChange("bedroomNumber", e.target.value)} />
          <p className="note mt-1 mb-0">Enter the total number of bedrooms.</p>
        </div>
        {/* Bathrooms */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} value={propertyDetails.bathroomsNumber} onChange={(e) => handleInputChange("bathroomNumber", e.target.value)} placeholder="Number of Bathrooms" />
          <p className="note mt-1 mb-0">Enter the total number of bathrooms.</p>
        </div>
        {/* Rooms */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} value={propertyDetails.roomsNumber} onChange={(e) => handleInputChange("roomsNumber", e.target.value)} placeholder="Number of Rooms" />
          <p className="note mt-1 mb-0">Enter the total number of rooms.</p>
        </div>
        {/* Floors */}
        <div className="col-md-6 mb-4">
          <Input type={"number"} value={propertyDetails.floorsNumber} onChange={(e) => handleInputChange("floorsNumber", e.target.value)} placeholder="Number of Floors" />
          <p className="note mt-1 mb-0">Enter the number of floors in the property.</p>
        </div>
        {/* Finish Type */}
        <div className="col-md-6 mb-4">
          <select className="wide mb-0" ref={finishTypeRef}>
            <option value="0" disabled selected>
              -- Finish Type --
            </option>
            <option value="FULL">Super Lux</option>
            <option value="HALF">Half Finished</option>
            <option value="WITHOUT">Without Finish</option>
          </select>
          <p className="note mt-1 mb-0">Select the finish type of the property.</p>
        </div>
        {/* Status */}
        <div className="col-md-6 mb-4">
          <select className="wide mb-0" ref={statusRef}>
            <option value="0" disabled selected>
              -- Property Status --
            </option>
            <option value="NEW">New</option>
            <option value="UNDER_CONSTRUCTION">Under Construction</option>
            <option value="USED">Used</option>
          </select>
          <p className="note mt-1 mb-0">Select the current status of the property.</p>
        </div>
      </div>
    </section>
  );
}

export default BasicInfo;
