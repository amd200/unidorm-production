import { combineReducers } from "redux";
import authReducer from "./authReducer";
import propertyReducer from "./propertyReducer";
import profileReducer from "./profileReducer";
import reviewReducer from "./reveiwReducer";
import tourReducer from "./tourReducer";
import orderReducer from "./orderReducer";

export default combineReducers({
  authReducer: authReducer,
  propertyReducer: propertyReducer,
  profileReducer: profileReducer,
  reviewReducer: reviewReducer,
  tourReducer: tourReducer,
  orderReducer: orderReducer,
});
