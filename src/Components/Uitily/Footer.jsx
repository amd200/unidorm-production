import React from "react";
import { NavLink } from "react-router-dom";
import logo2 from "../../assets/imgs/logo2.svg"
const Footer = () => {
  return (
    <footer className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="list mb-4">
              <NavLink to="/" className="logo ">
                <img src={logo2} alt="logo" />
              </NavLink>
              {/* <h3 className="mt-4">Subscribe</h3> */}
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="list">
              <h3>Support</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#" className="text-decoration-none ">
                    111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    exclusive@gmail.com
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    +88015-88888-9999
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="list">
              <h3>Account</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    My Account
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    Login / Register
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    Wishlist
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    Properties
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="list">
              <h3>About UniDorm</h3>
              <ul className="list-unstyled">
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink to="#" className="text-decoration-none">
                    Want to be A seller ?
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-3">
            <div className="list">
              <h3>Follow Us</h3>
              <ul className="list-unstyled flex-row d-flex">
                <li className="me-3">
                  <NavLink to="#" className="text-decoration-none">
                    <img src="assets/imgs/Icon-Facebook.svg" alt="" />
                  </NavLink>
                </li>
                <li className="me-3">
                  <NavLink to="#" className="text-decoration-none">
                    <img src="assets/imgs/Icon-Twitter.svg" alt="" />
                  </NavLink>
                </li>
                <li className="me-3">
                  <NavLink to="#" className="text-decoration-none">
                    <img src="assets/imgs/icon-instagram.svg" alt="" />
                  </NavLink>
                </li>
                <li className="me-3">
                  <NavLink to="#" className="text-decoration-none">
                    <img src="assets/imgs/Icon-Linkedin.svg" alt="" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
