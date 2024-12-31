import useGetData from "../../hook/useGetDate";
import { useInsertDataWithImage, useInsertDataWithMedia } from "../../hook/useInsertData";
import { CREATE_PROPERTY, GET_ALL_PROPERTIES, GET_ONE_PROPERTY } from "../type";

export const createProperty = (property) => async (dispatch) => {
  try {
    const res = await useInsertDataWithMedia("/api/v1/property", property);
    dispatch({ type: CREATE_PROPERTY, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_PROPERTY, payload: e.response });
  }
};

export const getAllProperties = (page) => async (dispatch) => {
  try {
    const url = page ? `/api/v1/property?page=${page}` : `/api/v1/property`;

    const res = await useGetData(url);
    dispatch({ type: GET_ALL_PROPERTIES, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_PROPERTIES, payload: e.response });
  }
};

export const getOneProperty = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/property/${id}`);
    dispatch({ type: GET_ONE_PROPERTY, payload: res });
  } catch (e) {
    dispatch({ type: GET_ONE_PROPERTY, payload: e.response });
  }
};
