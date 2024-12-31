import { thunk } from "redux-thunk";
import rootReducer from "../reducer/rootReducer";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

const store = createStore(rootReducer, process.env.REACT_APP_ENV === "development" ? composeWithDevTools(applyMiddleware(...middleware)) : applyMiddleware(...middleware));

export default store;
