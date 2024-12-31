import { CREATE_REVIEW, GET_ALL_REVIEWS } from "../type";

const initialState = {
  review: [],
  reviews: [],
};

const reviewReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_REVIEW:
      return { ...state, review: action.payload };
    case GET_ALL_REVIEWS:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};

export default reviewReducer;
