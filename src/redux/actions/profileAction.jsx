import useGetData from "../../hook/useGetDate";
import { useUpdateData, useUpdateDataWithMedia } from "../../hook/useUpdateData";
import { GET_PROFILE, UPDATE_PROFILE } from "../type";

export const getUser = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/user/${id}`);
    dispatch({ type: GET_PROFILE, payload: res });
  } catch (e) {
    dispatch({ type: GET_PROFILE, payload: e.response });
  }
};

export const updatProfile = (id, data) => async (dispatch) => {
  try {
    const res = await useUpdateDataWithMedia(`/api/v1/user/${id}`, data);
    dispatch({ type: UPDATE_PROFILE, payload: res });
  } catch (e) {
    dispatch({ type: UPDATE_PROFILE, payload: e.response });
  }
};
