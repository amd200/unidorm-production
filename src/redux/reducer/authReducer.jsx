import { CREATE_NEW_USER, LOGIN_USER, LOGOUT_USER, VERTIFY_EMAIL } from "../type";

const initalState = {
  createUser: [],
  vertifyEmail: [],
  loginUser: [],
  logoutUser: [],
};
const authReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        ...state,
        createUser: action.payload,
      };
    case VERTIFY_EMAIL:
      return {
        ...state,
        vertifyEmail: action.payload,
      };
    case LOGIN_USER:
      return {
        ...state,
        loginUser: action.payload,
      };
    case LOGOUT_USER:
      return {
        ...state,
        logoutUser: action.payload,
      };

    default:
      return state;
  }
};
export default authReducer;
