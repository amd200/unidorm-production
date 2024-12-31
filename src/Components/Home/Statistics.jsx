import React from "react";
// import waveRight from "../../assets/imgs/wave-right.svg";
// import waveLeft from "../../assets/imgs/wave-left.svg";
function Statistics() {
  return (
    <section className="statistics position-relative overflow-hidden d-lg-flex d-none align-items-center">
      {/* <img src={waveLeft} className="decor-image position-absolute top-50 translate-middle" style={{ left: "48px" }} alt="Decorative Image" /> */}
      {/* <img src={waveRight} className="decor-image position-absolute top-50 translate-middle" style={{ right: "-48px" }} alt="Decorative Image" /> */}

      <div className="container rounded  bg-white">
        <div className="row">
          <div className="col-4">
            <div className="stat-item d-flex flex-column align-items-center">
              <h3 className="stat-title">Properties</h3>
              <span className="stat-value">+300</span>
            </div>
          </div>
          <div className="col-4">
            <div className="stat-item d-flex flex-column align-items-center">
              <h3 className="stat-title">Renters</h3>
              <span className="stat-value">+300</span>
            </div>
          </div>
          <div className="col-4">
            <div className="stat-item d-flex flex-column align-items-center">
              <h3 className="stat-title">Owners</h3>
              <span className="stat-value">+300</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Statistics;
