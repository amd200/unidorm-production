import React, { useEffect, useRef, useState } from "react";
import { CiShare2 } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaDribbble } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import bed from "../../assets/imgs/bed.svg";
import bathroom from "../../assets/imgs/bathroom.svg";
import size from "../../assets/imgs/size.svg";
import { EmailShareButton, FacebookShareButton, LinkedinShareButton, PinterestShareButton, TelegramShareButton, TwitterShareButton, WhatsappShareButton, FacebookMessengerShareButton } from "react-share";
import { Rating } from "react-simple-star-rating";
import Badges from "./Badges";
import Modal from "../Uitily/Modal";
import { Input, TextArea } from "../Ui/Fields";
import $ from "jquery";
import notify from "../../hook/useNotifaction";
import { create } from "@mui/material/styles/createTransitions";
import { createTour } from "../../redux/actions/tourAction";
import { useDispatch, useSelector } from "react-redux";
import { PrimaryBtn } from "../Ui/Buttons";
import { checkout, createOrder } from "../../redux/actions/orderAction";
window.jQuery = window.$ = $;
require("jquery-nice-select");
function Inforamtion({ property }) {
  const monthRef = useRef();
  useEffect(() => {
    $(monthRef.current).niceSelect();
  }, []);
  const [isActive, setIsActive] = useState(false);
  const shareRef = useRef(null);
  const shareUrl = "https://www.facebook.com/ahmed.elhosseni.71";

  const handleShareButtonClick = () => {
    setIsActive(!isActive);
  };

  const handleClickOutside = (event) => {
    if (shareRef.current && !shareRef.current.contains(event.target)) {
      setIsActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);
  // -------------------
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [sessions, setSessions] = useState([]);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.orderReducer.checkout);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(createTour({ name, email, phoneNumber: phone, fromDate: startDate, toDate: endDate, message, leaseType: "MONTHLY" }));
    notify("Your request has been sent successfully", "success");
    setName("");
    setEmail("");
    setPhone("");
    setStartDate("");
    setEndDate("");
    setMessage("");
  };

  const handleCreateOrder = async () => {
    await dispatch(
      createOrder({
        quantity: 1,
        propertyId: property.id,
      })
    );
    await dispatch(checkout());
    setLoading(false);
  };

  useEffect(() => {
    if (loading === false && data.data.url) {
      let url = data.data.url;
      const path = new URL(url).pathname;
      const sessionId = path.split("/")[3];
      window.open(url);
      setSessions((prevSessions) => {
        const newSessions = [...prevSessions, sessionId];
        localStorage.setItem("sessions", JSON.stringify(newSessions));
        return newSessions;
      });
    }
  }, [loading, data]);

  return (
    <section className="information mb-4 ">
      <div className="row">
        <div className="col-lg-8 border-end position-relative">
          <div className={`toggle-shareButton ${isActive ? "active" : ""}`}>
            <div className="shareButton" onClick={handleShareButtonClick} ref={shareRef}>
              <CiShare2 />
            </div>
            <nav>
              <li style={{ "--i": 1, "--clr": "#3b5998" }}>
                <FacebookShareButton url={shareUrl}>
                  <FaFacebook />
                </FacebookShareButton>
              </li>
              <li style={{ "--i": 2, "--clr": "#25d366" }}>
                <WhatsappShareButton url={shareUrl}>
                  <FaWhatsapp size={32} />
                </WhatsappShareButton>
              </li>
              <li style={{ "--i": 3, "--clr": "#000" }}>
                <TwitterShareButton url={shareUrl}>
                  <FaXTwitter />
                </TwitterShareButton>
              </li>
              <li style={{ "--i": 4, "--clr": "#c71610" }}>
                <EmailShareButton url={shareUrl}>
                  <SiGmail />
                </EmailShareButton>
              </li>
              <li style={{ "--i": 5, "--clr": "#0a66c2" }}>
                <LinkedinShareButton url={shareUrl}>
                  <FaLinkedin />
                </LinkedinShareButton>
              </li>
              <li style={{ "--i": 6, "--clr": "#00B2FF" }}>
                <FacebookMessengerShareButton appId="342417145325054" url={shareUrl}>
                  <FaFacebookMessenger />
                </FacebookMessengerShareButton>
              </li>
              <li style={{ "--i": 7, "--clr": "#bd081c" }}>
                <PinterestShareButton url={shareUrl} media={shareUrl}>
                  <FaPinterest />
                </PinterestShareButton>
              </li>
              <li style={{ "--i": 8, "--clr": "#229ED9" }}>
                <TelegramShareButton url={shareUrl}>
                  <FaTelegramPlane />
                </TelegramShareButton>
              </li>
            </nav>
          </div>
          <h3 className="mb-2">{property.name}</h3>
          <div className="mb-3">
            <Rating fillColor="#ff8a00" style={{ position: "relative", bottom: "3px" }} size={19} readonly={true} initialValue={5} className="me-2" />
          </div>
          <Badges numBadges={3} customClass={"mb-2"} />
          <ul className="list-unstyled flex-row details-room d-flex align-items-center  pt-2 flex-wrap">
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={bed} className="me-1" alt="bed" />
              {property.bedroomNumber} Beds
            </li>
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={bathroom} className="me-1" alt="Time Circle" />
              {property.bathroomNumber} Bathroom
            </li>
            <li className="d-flex align-items-center me-4 mb-2">
              <img src={size} className="me-1" alt="fi_info" />
              {property.area} M<sup>2</sup>
            </li>
          </ul>
          <div className="description">
            <h3 className="mb-2">Description</h3>
            <p>{property.description}</p>
          </div>
          <Modal />
        </div>
        <div className="col-lg-4">
          <div className="d-flex justify-content-center h-100 align-items-center">
            <div className="d-flex align-items-center flex-lg-column justify-content-center  w-100 mt-lg-0 mt-2">
              <button className="btn btn-primary2 px-lg-5 px-4 mb-lg-3 me-lg-0 me-4" data-bs-toggle="modal" data-bs-target="#requestTour">
                Request a tour
              </button>
              <button className="btn btn-borderOrange px-lg-5 px-4" onClick={handleCreateOrder}>
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="modal fade" id="requestTour" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header border-0 d-flex justify-content-center">
              <h5 className="modal-title" id="staticBackdropLabel">
                Request a tour
              </h5>
              <button type="button" className="btn-close shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-12 mb-4">
                    <Input type={"text"} placeholder={"Name"} value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className="col-12 mb-4">
                    <Input type={"email"} placeholder={"Email"} value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="col-12 mb-4">
                    <Input type={"number"} placeholder={"Phone Number"} value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <Input type={"date"} placeholder={"Date"} value={startDate} onChange={(e) => setStartDate(e.target.value)} />
                  </div>
                  <div className="col-lg-6 mb-4">
                    <Input type={"date"} placeholder={"Date"} value={endDate} onChange={(e) => setEndDate(e.target.value)} />
                  </div>
                  <div className="col-12 mb-4">
                    <TextArea placeholder={"Message"} value={message} onChange={(e) => setMessage(e.target.value)} />
                  </div>
                </div>
                <div className="modal-footer border-0">
                  <PrimaryBtn isSubmit={true} customClass={"px-5 mx-auto"} title={"Send a reqauest"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Inforamtion;
