import React, { useEffect, useState } from "react";
import user from "../../assets/imgs/user.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../redux/actions/profileAction";

function CardInfo() {
  let user = [];
  if (localStorage.getItem("user") != null) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  return (
    <div className="card-info bg-white rounded p-3">
      <div className="row align-items-center">
        <div className="col-lg-4 d-flex justify-content-center">
          <img src={user} width="131" height="129" alt="" />
        </div>
        <div className="col-lg-8">
          <h5 className="mb-4">{JSON.parse(localStorage.getItem("user")).name}</h5>
          <ul className="list-unstyled  d-flex flex-wrap align-items-center justify-content-between flex-wrap ">
            <li className="d-flex align-items-center mb-3">
              <MdOutlineMail className="me-2" />
              <span>{user.name}</span>
            </li>

            <li className="d-flex align-items-center mb-3">
              <FaPhoneAlt className="me-2" />
              <span>+728684681498</span>
            </li>

            <li className="d-flex align-items-center">
              <FaPhoneAlt className="me-2" />
              <span>+728684681498</span>
            </li>

            <li className="d-flex align-items-center">
              <CiLocationOn className="me-2" />
              <span>Medicine, Alexandria </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
