import React from "react";
import notFound from "../../assets/imgs/404.svg";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
import { FaArrowRight } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className="notFound-page py-5">
      <div className="container d-flex justify-content-center text-center flex-column align-items-center">
        <img src={notFound} className="img-fluid" alt="" />
        <h3>Oops! Page not found</h3>
        <p>The page you are looking for might have been removed or temporarily unavailable.</p>
        <PrimaryBtn to={"/"} title="Back to Home" customClass={"py-3"} icon={<FaArrowRight className="ms-3" />} />
      </div>
    </div>
  );
}

export default NotFoundPage;
