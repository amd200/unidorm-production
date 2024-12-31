import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOneProperty } from "../../redux/actions/propertiesAction";

function useDetailsProperty() {
  let { id } = useParams();
  const [property, setProperty] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.propertyReducer.property);

  useEffect(() => {
    dispatch(getOneProperty(id));
  }, [dispatch]);

  useEffect(() => {
    if (data && data.property) {
      setProperty(data.property);
    }
  }, [data]);
  return [property];
}

export default useDetailsProperty;
