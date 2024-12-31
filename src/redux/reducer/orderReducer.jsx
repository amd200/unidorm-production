import { CHECKOUT, CREATE_ORDER, GET_ALL_ORDERS } from "../type";

const initialState = {
  order: [],
  checkout: [],
  orders: [],
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, order: action.payload };
    case CHECKOUT:
      return { ...state, checkout: action.payload };
    case GET_ALL_ORDERS:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};
export default orderReducer;
