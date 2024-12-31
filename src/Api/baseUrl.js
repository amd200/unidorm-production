import axios from "axios";

const baseUrl = axios.create({
  baseURL: process.env.REACT_APP_ENV === "production" ? "https://four-5-realestate-backend.onrender.com" : "http://localhost:3000", 
});

export default baseUrl;
