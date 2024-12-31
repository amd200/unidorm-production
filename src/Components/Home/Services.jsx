import React from "react";
import TitleSection from "../Uitily/TitleSection";
import { IoHomeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsWallet2 } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

function Services() {
  return (
    <section className="services">
      <div className="container">
        <TitleSection title={"Our Services for you"} />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: " #FEF5EA" }}>
                <IoHomeOutline style={{ color: " #f57e77" }} />
                <ion-icon name="home-outline"></ion-icon>
              </div>
              <h3>Modern and Comfortable Spaces</h3>
              <p>Stylish, fully furnished apartments designed for student comfort.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div className="icon d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(85, 112, 241, 0.16)" }}>
                <CiLocationOn style={{ color: " #0B21E6" }} />
              </div>
              <h3>
                Prime Locations Near <br /> Universities
              </h3>
              <p>Stylish, fully furnished apartments designed for student comfort.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{
                  background: "rgba(248, 179, 46, 0.13)",
                }}
              >
                <BsWallet2 style={{ color: "#FFAD33" }} />
              </div>
              <h3>
                Convenient Online <br /> Payments
              </h3>
              <p>Stylish, fully furnished apartments designed for student comfort.</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card-servce d-flex align-items-center flex-column justify-content-center text-center rounded">
              <div
                className="icon d-flex align-items-center justify-content-center"
                style={{
                  background: "rgba(93, 193, 181, 0.13)",
                }}
              >
                <RiCustomerService2Line style={{ color: "#5DC1B5" }} />
              </div>
              <h3>
                Customer Service <br /> 24/7
              </h3>
              <p>Stylish, fully furnished apartments designed for student comfort.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
