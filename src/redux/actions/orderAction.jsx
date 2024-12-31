import baseUrl from "../../Api/baseUrl";
import useGetData from "../../hook/useGetDate";
import { useInsertData } from "../../hook/useInsertData";
import { CHEACKOUT, CHECKOUT, CREATE_ORDER, GET_ALL_ORDERS, HADNLE_SUCCESS } from "../type";

export const createOrder = (order) => {
  return async (dispatch) => {
    try {
      const res = await useInsertData("/api/v1/orders/cart", order);
      dispatch({ type: CREATE_ORDER, payload: res });
    } catch (error) {
      dispatch({ type: CREATE_ORDER, payload: error });
    }
  };
};

export const checkout = () => {
  return async (dispatch) => {
    try {
      const res = await useInsertData("/api/v1/orders/checkout");
      dispatch({ type: CHECKOUT, payload: res });
    } catch (error) {
      dispatch({ type: CHECKOUT, payload: error });
    }
  };
};

