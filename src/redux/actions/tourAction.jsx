import useGetData from "../../hook/useGetDate";
import { useInsertData } from "../../hook/useInsertData";
import { CREATE_TOUR, GET_ALL_REVIEWS, GET_ALL_TOURS } from "../type";

export const createTour = (request) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/request", request);
    dispatch({ type: CREATE_TOUR, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_TOUR, payload: e.response });
  }
};

export const getAllTours = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/request");
    dispatch({ type: GET_ALL_TOURS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_TOURS, payload: e.response });
  }
};
