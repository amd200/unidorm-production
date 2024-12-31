import React, { useEffect, useState } from "react";
import Imgs from "../../Components/DetailsProperties/Imgs";
import Amenities from "../../Components/DetailsProperties/Amenities";
import Facilities from "../../Components/DetailsProperties/Facilities";
import ReviewContainer from "../../Components/DetailsProperties/ReviewContainer";
import Inforamtion from "../../Components/DetailsProperties/Inforamtion";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOneProperty } from "../../redux/actions/propertiesAction";
import { Skeleton } from "@mui/material";
import { getUser } from "../../redux/actions/profileAction";
import useDetailsProperty from "../../services/property/useDetailsProperty";

function DetailsPropertiesPage() {
  const [property] = useDetailsProperty();
  if (!property) {
    return (
      <div className="detailsProperties-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 mb-3">
              <Skeleton variant="rectangular" width="100%" height={300} className="mb-3" />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Skeleton variant="rectangular" width="100%" height={300} className="mb-3" />
            </div>
            <div className="col-lg-4 col-md-6 mb-3">
              <Skeleton variant="rectangular" width="100%" height={300} className="mb-3" />
            </div>
          </div>

          <Skeleton variant="text" width="60%" height={30} className="mb-2" />
          <Skeleton variant="text" width="50%" height={20} className="mb-3" />
          <Skeleton variant="text" width="70%" height={20} className="mb-3" />
          <Skeleton variant="rectangular" width="100%" height={200} className="mb-4" />
        </div>
      </div>
    );
  }

  return (
    <div className="detailsProperties-page">
      <div className="container">
        <Imgs property={property} />
        <Inforamtion property={property} />
        <Amenities property={property} />
        <Facilities property={property} />
        <ReviewContainer property={property} />
      </div>
    </div>
  );
}

export default DetailsPropertiesPage;
