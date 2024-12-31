import React, { useEffect, useRef } from "react";
import { Input, Select } from "../Ui/Fields";

function Pricing({handleInputChange, propertyDetails, paymentTypeRef}) {
  return (
    <section className="pricing mb-4 d-lg-block d-none">
      <h3 className="mb-3">Pricing</h3>
      <div className="row">
        <div className="col-lg-9  pe-lg-2 pe-0">
          <Input type={"number"} value={propertyDetails.price} onChange={(e) => handleInputChange("price", e.target.value)} placeholder={"price"} />
        </div>

        <div className="col-lg-2  ps-lg-0 d-flex align-items-center">
          <span className="mb-4 mx-lg-3  fs-4 text-primary">/</span>
          <div className="wrapper">
            <select className="wide" ref={paymentTypeRef} name="" id="sort-by">
              <option value="0" disabled selected>
                -- Payment Type --
              </option>
              <option value="CASH">Cash</option>
              <option value="INSTALLMENT">installment</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
