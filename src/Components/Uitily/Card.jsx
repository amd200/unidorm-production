// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import { PrimaryBtn } from "../Ui/Buttons";
// import img1 from "../../assets/imgs/propertie1.jpg";
// import timeCirle from "../../assets/imgs/Time Circle.svg";
// import fi_info from "../../assets/imgs/fi_info.svg";
// import bed from "../../assets/imgs/bed.svg";
// import bathroom from "../../assets/imgs/bathroom.svg";
// import size from "../../assets/imgs/size.svg";
// import { FaArrowRight } from "react-icons/fa";

// function Card({ customClass }) {
//   return (
//     <div className={`card  mx-auto ${customClass ? customClass : ""}`}>
//       <img src={img1} className="card-img-top" alt="..." />
//       <div className="card-body position-relative">
//         <div className="row">
//           <div className="col-lg-5">
//             <h5 className="card-title">Cairo, Ain Shams near universities</h5>
//             <ul className="list-unstyled">
//               <li className="d-flex align-items-center ">
//                 <img src={timeCirle} className="me-2" alt="Time Circle" />
//                 Full Year
//               </li>
//               <li>
//                 <img src={fi_info} className="me-2" alt="fi_info" />
//                 Department .Bills Included
//               </li>
//             </ul>
//             {/* <p className="price">
//                         <span>$120</span> / month
//                     </p> */}
//             <ul className="list-unstyled flex-row details-room d-flex align-items-center justify-content-between border-top pt-2 flex-wrap">
//               <li className="d-flex align-items-center">
//                 <img src={bed} className="me-1" alt="bed" />4 Beds
//               </li>
//               <li className="d-flex align-items-center">
//                 <img src={bathroom} className="me-1" alt="Time Circle" />1
//                 Bathroom
//               </li>

//               <li className="d-flex align-items-center">
//                 <img src={size} className="me-1" alt="fi_info" />
//                 23 M
//               </li>
//             </ul>
//           </div>
//           <div className="col-lg-7">
//           <PrimaryBtn
//           to={"/detailsproperties"}
//           title="Check"
//           customClass={"mx-auto  w-50 "}
//           icon={<FaArrowRight className="ms-3" />}
//         />
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default Card;
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PrimaryBtn } from "../Ui/Buttons";
import img1 from "../../assets/imgs/propertie1.jpg";
import timeCirle from "../../assets/imgs/Time Circle.svg";
import fi_info from "../../assets/imgs/fi_info.svg";
import bed from "../../assets/imgs/bed.svg";
import bathroom from "../../assets/imgs/bathroom.svg";
import size from "../../assets/imgs/size.svg";
import { FaArrowRight } from "react-icons/fa";

function Card({ property, modeList }) {
  const [isFavourite, setIsFavourite] = useState(false);
  const [data, setCards] = useState([
    {
      id: 1,
      name: "Cairo, Ain Shams near universities",
      details: [
        {
          time: "Full Year",
          info: "Department .Bills Included",
          beds: 4,
          bathroom: 1,
          size: 23,
        },
      ],
      price: 120,
    },
  ]);

  return (
    <div className={`card card-property mx-auto position-relative ${modeList ? "list  p-4" : ""}`}>
      <div className={`row ${modeList ? "align-items-center" : ""}`}>
        <div className={` ${modeList ? "col-2" : "col-12"} `}>
          <img style={{ height: modeList ? "" : "200px" }} src={property.media[0] ? property.media[0] : img1} className={`card-img-top img-fluid`} alt="..." loading="lazy" />
        </div>

        <div className={` ${modeList ? "col-10" : "col-12"}`}>
          <div className={`description position-relative  ${modeList ? "p-0" : "p-3"}`}>
            <div className="row align-items-center">
              <div className={`${modeList ? "col-8" : "col-12"}`}>
                <h5 className="card-title mb-2">{property.name}</h5>
                <ul className={`list-unstyled ${modeList ? "d-flex flex-row mb-1  flex-wrap mb-0" : ""}`}>
                  <li className={`d-flex align-items-center ${modeList ? "me-3" : "mb-2"}`}>
                    <img src={timeCirle} className="me-2" alt="Time Circle" />
                    Full Year
                  </li>
                  <li>
                    <img src={fi_info} className="me-2" alt="fi_info" />
                    Department .Bills Included
                  </li>
                </ul>

                <ul className={`list-unstyled flex-row details-room d-flex align-items-center   ${modeList ? "mb-0 gap-4" : "border-top justify-content-between"} pt-2 flex-wrap`}>
                  <li className="d-flex align-items-center">
                    <img src={bed} className="me-1" alt="bed" />
                    12 Beds
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={bathroom} className="me-1" alt="Time Circle" />
                    {property.bathroomNumber} Bathroom
                  </li>
                  <li className="d-flex align-items-center">
                    <img src={size} className="me-1" alt="fi_info" />
                    {property.area}M <sup>2</sup>
                  </li>
                </ul>
              </div>
              <div className={`d-flex  ${modeList ? "col-4  flex-column align-items-center justify-content-center" : "col-12 align-items-center justify-content-center"} `}>
                <p className={`price ${modeList ? "position-relative top-0 end-0" : "position-absolute"}`}>
                  <span>${property.price}</span> / month{" "}
                </p>
                <PrimaryBtn to={"/detailsproperties/" + property.id} title="Check" customClass={`  ${modeList ? "px-lg-5 px-md-4" : "w-50"} } `} icon={<FaArrowRight className="ms-3" />} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="favourite bg-white rounded-circle"></div> */}
    </div>
  );
}

export default Card;
