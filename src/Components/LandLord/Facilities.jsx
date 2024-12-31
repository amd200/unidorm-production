import React, { useState } from "react";
import Creatable from "react-select/creatable";

function Facilities({ handleFacilitiesChange }) {
  const [transportation, setTransportation] = useState([]);
const options = [
  { value: "Restaurants", label: "Restaurants" },
  { value: "Parks", label: "Parks" },
  { value: "Gyms", label: "Gyms" },
  { value: "Hospitals", label: "Hospitals" },
]
  const handleTransportationChange = (selectedOptions) => {
    const valuesArray = selectedOptions ? selectedOptions.map((item) => item.value) : [];
    setTransportation(valuesArray);
  };

  return (
    <section className="facilities mb-4">
      <h3 className="mb-3">Facilities</h3>
      <div className="row">
        <div className="col-12">
          <label className="mb-1">Nearby Facilities</label>
          <p className="mb-1">Adding names of nearby facilities (e.g., restaurants, parks, gyms, hospitals) helps users know what amenities are available in the area.</p>
          <Creatable placeholder="Add Facilities Name" isMulti options={[]} onChange={handleFacilitiesChange} className="basic-multi-select select-multi mb-4 shadow-none border-0" classNamePrefix="select" />
        </div>
      </div>
    </section>
  );
}

export default Facilities;
