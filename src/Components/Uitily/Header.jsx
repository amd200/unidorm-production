import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { PrimaryBtn, SecondaryBtn } from "../Ui/Buttons";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/authAction";
import { UserContext } from "../../context/useContext";
function Header() {
  const [user, setUser] = useState("");
  const data = useContext(UserContext);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("user") != null) setUser(JSON.parse(localStorage.getItem("user")));
  }, [localStorage.getItem("user")]);
  const logOut = () => {
    setUser("");
    localStorage.clear();
    dispatch(logoutUser());
  };
  return (
    <header>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-6">
            <NavLink to="/" className="logo">
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <div className="col-lg-4 d-lg-flex d-none">
            <ul className="navbar-nav flex-lg-row flex-column">
              <li className="nav-item me-5">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/properties" className="nav-link">
                  Properties
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/blog" className="nav-link">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item me-5">
                <NavLink to="/contact" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="col-lg-4 col-6">
            <div className="btns d-lg-flex justify-content-end d-none">
              {user ? (
                <>
                  <div className="dropdown">
                    <button className="btn border-0 d-flex align-items-center  dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src={"https://images.unsplash.com/photo-1499714608240-22fc6ad53fb2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80"} width={30} height={30} className="rounded-circle me-2" alt="user" />
                      <span>{user.name}</span>
                    </button>
                    <ul className="dropdown-menu border-0 shadow" aria-labelledby="dropdownMenuButton1">
                      <li>
                        <NavLink className="dropdown-item" to="/User/profile">
                          Profile
                        </NavLink>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" onClick={logOut}>
                          LogOut
                        </a>
                      </li>
                    </ul>
                  </div>

                  <PrimaryBtn customClass={"ms-3"} to={"/"} onClick={logOut} title="logout" />
                </>
              ) : (
                <>
                  <SecondaryBtn to={"/signup"} customClass={"me-3"} title="list a property" />
                  <PrimaryBtn to={"/login"} title="Sign In" />
                </>
              )}
            </div>
            <div className="bars d-lg-none d-flex align-items-center justify-content-center flex-column ms-auto" id="bars">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
