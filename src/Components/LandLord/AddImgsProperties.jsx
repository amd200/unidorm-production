import React, { useState } from "react";
import iconImg from "../../assets/imgs/img.svg";
import iconCamera from "../../assets/imgs/Category-Camera.svg";

function AddImgsProperties({additionalDivImagesVisible,handleImageChange,images}) {
  return (
    <section className="addImgsProperties mb-4">
      <h3 className="mb-3">Images</h3>
      <div className="row">
        <div className={`col-lg-3 ${additionalDivImagesVisible ? "" : "order-last"} `}>
          <input type="file" id="addImg" onChange={handleImageChange} multiple accept="image/*" />
          <label htmlFor="addImg" className="addImgs d-flex justify-content-center align-items-center flex-column mb-lg-0 mb-3">
            <img src={iconImg} alt="" className="mb-1" />
            <span>
              Add Thumbnail to property <img src={iconCamera} className="ms-1" width={18} height={18} alt="" />
            </span>
          </label>
        </div>
        {additionalDivImagesVisible && (
          <div className="col-lg-3">
            <div className="border-img mb-3"></div>
          </div>
        )}
        {images &&
          images.map((image, index) => (
            <div className="col-lg-3" key={index}>
              <div className="border-img mb-3">
                <img src={image} alt={`Thumbnail ${index}`} />
              </div>
            </div>
          ))}
      </div>
    </section>
  );
}

export default AddImgsProperties;
