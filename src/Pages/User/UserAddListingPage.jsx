import React, { useEffect, useRef, useState } from "react";
import Facilities from "../../Components/LandLord/Facilities";
import { DangerBtn, PrimaryBtn } from "../../Components/Ui/Buttons";
import MenuProfile from "../../Components/User/MenuProfile";

// import plugins if you need

import "jquery-nice-select/css/nice-select.css";
import useAddProperty from "../../services/property/useAddProperty";
import BasicInfo from "../../Components/LandLord/BasicInfo";
import AddImgsProperties from "../../Components/LandLord/AddImgsProperties";
import AddVideosProperties from "../../Components/LandLord/AddVideosProperties ";
import Pricing from "../../Components/LandLord/Pricing";
import Location from "../../Components/LandLord/Location";
import Amenities from "../../Components/User/Amenities";
import useChangeTitle from "../../hook/useChangeTitle";
function UserAddListingPage() {
  useChangeTitle("Add Listing | إضافة عقار");

  const [propertyDetails, images, videos, additionalDivImagesVisible, additionalDivVideoVisible, handleImageChange, handleVideoChange, onSubmit, handleInputChange, handleFacilitiesChange, handleAmenitiesChange, statusRef, finishTypeRef, propertyTypeRef, paymentTypeRef, countryRef] = useAddProperty();
  return (
    <div className="addListing-page py-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 mb-3">
            <MenuProfile />
          </div>
          <div className="col-lg-10">
            <div className="d-flex align-items-center justify-content-end gap-2">
              <DangerBtn title={"Cancel"} to={"#"} />
              <PrimaryBtn onClick={onSubmit} title={"Add Listing"} to={"#"} />
            </div>
            <AddImgsProperties additionalDivImagesVisible={additionalDivImagesVisible} handleImageChange={handleImageChange} images={images} />
            <AddVideosProperties additionalDivVideoVisible={additionalDivVideoVisible} handleVideoChange={handleVideoChange} videos={videos} />

            <BasicInfo handleInputChange={handleInputChange} propertyDetails={propertyDetails} propertyTypeRef={propertyTypeRef} finishTypeRef={finishTypeRef} statusRef={statusRef} />

            <Location handleInputChange={handleInputChange} propertyDetails={propertyDetails} countryRef={countryRef} />
            <Pricing handleInputChange={handleInputChange} propertyDetails={propertyDetails} paymentTypeRef={paymentTypeRef} />
            <Facilities handleFacilitiesChange={handleFacilitiesChange} />
            <Amenities handleAmenitiesChange={handleAmenitiesChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserAddListingPage;
