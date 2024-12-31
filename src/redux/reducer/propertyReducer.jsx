import { CREATE_PROPERTY, GET_ALL_PROPERTIES, GET_ONE_PROPERTY } from "../type";

const initalState = {
  property: [],
  properties: [],
};
const propertyReducer = (state = initalState, action) => {
  switch (action.type) {
    case CREATE_PROPERTY:
      return {
        ...state,
        property: action.payload,
      };
    case GET_ALL_PROPERTIES:
      return {
        ...state,
        properties: action.payload,
      };
    case GET_ONE_PROPERTY:
      return {
        ...state,
        property: action.payload,
      };

    default:
      return state;
  }
};
export default propertyReducer;
