import React from "react";

function Landing() {

  return (
    <section className="landing py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="text">
              <h1>
              Discover Your Ideal Student Home With 
                <br />
                <span className="frist-span">Uni</span>
                <span className="second-span">Dorm!</span>
              </h1>
              <p>
                UniDorm is a company that makes the process of seeking student
                housing more straightforward by facilitating students' discovery
                of acceptable housing options.
              </p>
            </div>
            <form action="" className="form-search mt-5 w-75">
              <div
                className="input-search d-flex align-items-center border"
                style={{ borderRadius: "10px" }}
              >
                <input
                  type="text"
                  className="form-control shadow-none border-0 bg-transparent"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button
                  type="submit"
                  className="btn btn-orange text-white"
                  style={{ borderRadius: "10px" }}
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-6">
            <div className="image">
              <img
                src="assets/imgs/Image-Landing.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
