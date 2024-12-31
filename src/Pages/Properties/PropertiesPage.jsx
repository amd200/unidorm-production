import React, { useState, useEffect, useRef } from "react";
import Card from "../../Components/Uitily/Card";
import SideFilter from "../../Components/Properties/SideFilter";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { AiOutlineBars } from "react-icons/ai";
import { PrimaryBtn } from "../../Components/Ui/Buttons";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../../redux/actions/propertiesAction";
import Skeleton from "@mui/material/Skeleton";
import useAllProperties from "../../services/property/useAllProperties";

function PropertiesPage() {
  const [properties, modeList, handleModeList, handleChange, loading] = useAllProperties();
  console.log(loading);
  console.log(properties);
  return (
    <div className="properties-page py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideFilter />
          </div>
          <div className="col-lg-9">
            <div className="properties">
              <div className="row align-items-end mb-3 px-lg-0 px-4">
                <div className="col-12 d-flex align-items-center gap-3 ">
                  <PrimaryBtn onClick={handleModeList} title={"List"} icon={<AiOutlineBars className="me-2" />} customClass={"flex-row-reverse"} />
                </div>
              </div>
              <div className="row">
                {
                  loading ? (
                    Array.from({ length: 6 }).map((_, index) => (
                      <div className={`mb-3 ${modeList ? "col-lg-12" : "col-lg-4 col-md-6"}`} key={index}>
                        <Skeleton variant="rectangular" width="100%" height={250} />
                        <Skeleton variant="text" width="60%" />
                        <Skeleton variant="text" width="40%" />
                      </div>
                    ))
                  ) : properties.length > 0 ? (
                    properties.map((property, index) => (
                      <div className={`${modeList ? "col-lg-12" : "col-lg-4 col-md-6"}`} key={property.id}>
                        <Card modeList={modeList} property={property} />
                      </div> // عرض العناصر الموجودة في properties
                    ))
                  ) : (
                    <span className="text-center fs-2">Not Found </span>
                  ) // حالة لم يتم العثور على أي عناصر
                }
              </div>
            </div>
            {loading == false && properties && properties.length > 0 && (
              <Stack spacing={2} className="d-flex  align-items-center mt-5">
                <Pagination count={properties && properties.metadata && properties.metadata.totalPages} onChange={handleChange} color="primary" />
              </Stack>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertiesPage;

{
}
