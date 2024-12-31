import useGetData from "../../hook/useGetDate";
import { useInsertData, useInsertDataWithMedia } from "../../hook/useInsertData";
import { CREATE_NEW_USER, LOGIN_USER, LOGOUT_USER, VERTIFY_EMAIL } from "../type";

export const createNewUser = (user) => async (dispatch) => {
  try {
    const res = await useInsertDataWithMedia("/api/v1/auth/register", user);
    dispatch({ type: CREATE_NEW_USER, payload: res });
  } catch (e) {
    dispatch({ type: CREATE_NEW_USER, payload: e.response });
  }
};

export const vertifyEmail = (user) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/auth/verify-email", user);
    dispatch({ type: VERTIFY_EMAIL, payload: res });
  } catch (e) {
    dispatch({ type: VERTIFY_EMAIL, payload: e.response });
  }
};
export const loginUser = (user) => async (dispatch) => {
  try {
    const res = await useInsertData("/api/v1/auth/login", user);
    dispatch({ type: LOGIN_USER, payload: res });
  } catch (e) {
    dispatch({ type: LOGIN_USER, payload: e.response });
  }
};

export const logoutUser = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/auth/logout");
    dispatch({ type: LOGOUT_USER, payload: res });
  } catch (e) {
    dispatch({ type: LOGOUT_USER, payload: e.response });
  }
};
