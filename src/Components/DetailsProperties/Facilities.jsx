import React from "react";

function Facilities({ property }) {
  return (
    <section className="facilities mb-4">
      <h3>Facilities</h3>
      <div className="row">
        <div className="col-lg-4">
          <ul>
            <div className="row">
              {property.facilities.map((facility,id) => (
                <div className="col-lg-4" key={id}>
                  <li className="mb-2 "><span>{facility}</span></li>
                </div>
              ))}
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
