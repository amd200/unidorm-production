import { thunk } from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import { applyMiddleware, createStore } from "redux";

const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));
export default store;
