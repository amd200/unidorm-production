import React from "react";

function Amenities({ property }) {
  return (
    <section className="Amenities mb-4">
      <h3>Amenities</h3>
      <div className="row">
        <div className="col-lg-4">
          <div className="badges">
            {property.amenities.map((amenity,id) => (
              <span key={id} className="badge me-2 px-4 py-2 mb-2">{amenity}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
