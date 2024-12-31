import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties } from "../../redux/actions/propertiesAction";

function useAllProperties() {
  const [modeList, setModeList] = useState(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.propertyReducer.properties);
  const [properties, setProperties] = useState();
  const [loading, setLoading] = useState(true);
  const handleModeList = () => {
    if (window.innerWidth < 766) {
      setModeList(false);
    } else {
      setModeList(!modeList);
    }
  };

  useEffect(() => {
    dispatch(getAllProperties());
  }, []);

  const handleChange = async (page) => {
    await dispatch(getAllProperties(page));
  };
  useEffect(() => {
    if (data && data.properties) {
      setProperties(data.properties);
      setLoading(false);
    }
  }, [data]);

  return [properties, modeList, handleModeList, handleChange, loading];
}

export default useAllProperties;
