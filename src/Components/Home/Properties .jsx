import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import TitleSection from "../Uitily/TitleSection";
import Card from "../Uitily/Card";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../../redux/actions/propertiesAction";
import Skeleton from "@mui/material/Skeleton"; // استيراد Skeleton من MUI

function Properties() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.propertyReducer.properties);
  const [properties, setProperties] = useState();
  useEffect(() => {
    dispatch(getAllProperties());
  }, []);
  useEffect(() => {
    if (data && data.properties && data.properties.length > 0) {
      setProperties(data);
    }
  }, [data]);
  return (
    <section className="properties py-5">
      <div className="container">
        <TitleSection title="Neared for you" />
        <div className="row">
          {data && data.properties && data.properties.length > 0
            ? data.properties.slice(0, 8).map((property, index) => (
                <div key={index} className="col-xl-3 col-md-6 mb-3">
                  <Card property={property} />
                </div>
              ))
            : // عرض Skeleton أثناء تحميل البيانات
              Array.from({ length: 8 }).map((_, index) => (
                <div key={index} className="col-xl-3 col-md-6 mb-3">
                  <Skeleton variant="rectangular" width="100%" height={200} />
                  <Skeleton variant="text" width="60%" />
                  <Skeleton variant="text" width="40%" />
                </div>
              ))}
        </div>
      </div>
    </section>
  );
}

export default Properties;
