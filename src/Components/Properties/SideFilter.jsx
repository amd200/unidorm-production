import React from "react";
import ReactStars from "react-rating-stars-component";
import { MdOutlineDateRange } from "react-icons/md";

function SideFilter() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="side-filter mb-4 ">
      <div className="accordion " id="accordionPanelsStayOpenExample">
        <div className="accordion-item border-0 ">
          <h2 className="accordion-header border-bottom " id="panelsStayOpen-headingOne ">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Type
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                    <label className="form-check-label" htmlFor="flexCheckDefault1">
                      Studio
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                    <label className="form-check-label" htmlFor="flexCheckDefault2">
                      Department
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                    <label className="form-check-label" htmlFor="flexCheckDefault4">
                      Shared Room
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault5" />
                    <label className="form-check-label" htmlFor="flexCheckDefault5">
                      Private Room
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault6" />
                    <label className="form-check-label" htmlFor="flexCheckDefault6">
                      Student residence
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-bottom" id="panelsStayOpen-headingTwo">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Location
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault7" />
                    <label className="form-check-label" htmlFor="flexCheckDefault7">
                      Close to University
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault8" />
                    <label className="form-check-label" htmlFor="flexCheckDefault8">
                      Neighborhood
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault9" />
                    <label className="form-check-label" htmlFor="flexCheckDefault9">
                      City
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-bottom" id="panelsStayOpen-headingThree">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Amenities
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingThree">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault10" />
                    <label className="form-check-label" htmlFor="flexCheckDefault10">
                      Air Conditioning
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault11" />
                    <label className="form-check-label" htmlFor="flexCheckDefault11">
                      Heating
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault12" />
                    <label className="form-check-label" htmlFor="flexCheckDefault12">
                      Wifi
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault13" />
                    <label className="form-check-label" htmlFor="flexCheckDefault13">
                      Bills included
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault14" />
                    <label className="form-check-label" htmlFor="flexCheckDefault14">
                      Smart Tv
                    </label>
                  </div>
                  <span>38</span>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault15" />
                    <label className="form-check-label" htmlFor="flexCheckDefault15">
                      Kitchen
                    </label>
                  </div>
                  <span>38</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-bottom" id="panelsStayOpen-headingFour">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              Amenities
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFour">
            <div className="accordion-body">
              <div className="row mb-3">
                <div className="col-6">
                  <div className="min-max position-relative">
                    <input type="number" className="form-control" placeholder="Min" />
                    <MdOutlineDateRange className="position-absolute end-0 top-50 translate-middle-y me-3" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="min-max position-relative">
                    <input type="number" className="form-control" placeholder="Max" />
                    <MdOutlineDateRange className="position-absolute end-0 top-50 translate-middle-y me-3" />
                  </div>
                </div>
              </div>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefaultt" />
                    <label className="form-check-label" htmlFor="flexCheckDefaultt">
                      Full Year
                    </label>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault16" />
                    <label className="form-check-label" htmlFor="flexCheckDefault16">
                      Semester
                    </label>
                  </div>
                </li>

                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault17" />
                    <label className="form-check-label" htmlFor="flexCheckDefault17">
                      Academic Year
                    </label>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault18" />
                    <label className="form-check-label" htmlFor="flexCheckDefault18">
                      Month-to-Month
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-bottom" id="panelsStayOpen-headingFive">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
              Size
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingFive">
            <div className="accordion-body">
              <div className="row mb-3">
                <div className="col-6">
                  <div className="min-max position-relative">
                    <input type="number" className="form-control" placeholder="Min" />
                  </div>
                </div>
                <div className="col-6">
                  <div className="min-max position-relative">
                    <input type="number" className="form-control" placeholder="Max" />
                  </div>
                </div>
              </div>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault19" />
                    <label className="form-check-label" htmlFor="flexCheckDefault19">
                      15 m² or more
                    </label>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20" />
                    <label className="form-check-label" htmlFor="flexCheckDefault20">
                      30 m² or more
                    </label>
                  </div>
                </li>

                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault21" />
                    <label className="form-check-label" htmlFor="flexCheckDefault21">
                      60 m² or more
                    </label>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between mb-2">
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault22" />
                    <label className="form-check-label" htmlFor="flexCheckDefault22">
                      90 m² or more
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="accordion-item border-0">
          <h2 className="accordion-header border-bottom" id="panelsStayOpen-headingSix">
            <button className="accordion-button shadow-none bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="false" aria-controls="panelsStayOpen-collapseSix">
              Rating
            </button>
          </h2>
          <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingSix">
            <div className="accordion-body">
              <ul className="list-unstyled">
                <li className="d-flex align-items-center justify-content-between  mb-2">
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault23" />
                    <label className="form-check-label" htmlFor="flexCheckDefault23">
                      <ReactStars edit={false} count={5} onChange={ratingChanged} size={24} value={5} activeColor="#ff8a00" />
                    </label>
                  </div>
                  <span> 5.0</span>
                </li>
                <li className="d-flex align-items-center justify-content-between  mb-2">
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault24" />
                    <label className="form-check-label" htmlFor="flexCheckDefault24">
                      <ReactStars edit={false} count={5} onChange={ratingChanged} size={24} value={4} activeColor="#ff8a00" />
                    </label>
                  </div>
                  <span> 4.0 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between  mb-2">
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault25" />
                    <label className="form-check-label" htmlFor="flexCheckDefault25">
                      <ReactStars edit={false} count={5} onChange={ratingChanged} size={24} value={4} activeColor="#ff8a00" />
                    </label>
                  </div>
                  <span>3.0 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between  mb-2">
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault26" />
                    <label className="form-check-label" htmlFor="flexCheckDefault26">
                      <ReactStars edit={false} count={5} onChange={ratingChanged} size={24} value={3} activeColor="#ff8a00" />
                    </label>
                  </div>
                  <span> 2.0 & up</span>
                </li>
                <li className="d-flex align-items-center justify-content-between  mb-2">
                  <div className="form-check d-flex align-items-center">
                    <input className="form-check-input me-2" type="checkbox" value="" id="flexCheckDefault27" />
                    <label className="form-check-label" htmlFor="flexCheckDefault27">
                      <ReactStars edit={false} count={5} onChange={ratingChanged} size={24} value={1} activeColor="#ff8a00" />
                    </label>
                  </div>
                  <span> 1.0 & up</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideFilter;
