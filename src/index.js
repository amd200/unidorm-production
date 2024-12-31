import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // استيراد CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // استيراد JavaScript
import "bootstrap/dist/js/bootstrap.min.js"; // استيراد JavaScript
import "./assets/css/style.scss"; // ملف الـ SCSS الخاص بك
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import { UserContextProvider } from "./context/useContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <UserContextProvider>
      <App />
    </UserContextProvider>
  </Provider>
);

reportWebVitals();
