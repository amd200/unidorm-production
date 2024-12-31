import React from "react";
import Creatable from "react-select/creatable";

function Amenities({ handleAmenitiesChange }) {
  return (
    <section className="amenities mb-4">
      <h3 className="mb-3">Amenities</h3>
      <div className="row">
        <div className="col-12">
          <label className="mb-1">Nearby Amenities</label>
          <p className="mb-1">Adding names of nearby facilities (e.g., restaurants, parks, gyms, hospitals) helps users know what amenities are available in the area.</p>
          <Creatable placeholder="Add Amenities" isMulti onChange={handleAmenitiesChange} className="basic-multi-select select-multi mb-4 shadow-none border-0" classNamePrefix="select" />{" "}
        </div>
      </div>
    </section>
  );
}

export default Amenities;
