import { GET_PROFILE, UPDATE_PROFILE } from "../type";

const initialState = {
  user: [],
  profile: [],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROFILE:
      return { ...state, user: action.payload };
    case UPDATE_PROFILE:
      return { ...state, profile: action.payload };
    default:
      return state;
  }
};
export default profileReducer;
