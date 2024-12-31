import useGetData from "../../hook/useGetDate";
import { useInsertData } from "../../hook/useInsertData";
import { CREATE_REVIEW, GET_ALL_REVIEWS } from "../type";

const createReview = (review) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/review", review);
    dispatch({ type: CREATE_REVIEW, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_REVIEW, payload: e.response });
  }
};

const getAllReviews = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/review");
    dispatch({ type: GET_ALL_REVIEWS, payload: res });
  } catch (e) {
    dispatch({ type: GET_ALL_REVIEWS, payload: e.response });
  }
};

export { createReview, getAllReviews };
