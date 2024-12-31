import { CREATE_TOUR, GET_ALL_TOURS } from "../type";

const initialState = {
  tour: [],
  tours: [],
};

const tourReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TOUR:
      return { ...state, tour: action.payload };
    case GET_ALL_TOURS:
      return { ...state, tours: action.payload };
    default:
      return state;
  }
};

export default tourReducer;
