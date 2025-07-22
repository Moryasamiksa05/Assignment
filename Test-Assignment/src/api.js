
import axios from 'axios';

const API = axios.create({
  baseURL: window.location.hostname === "localhost"
    ? "http://localhost:5000/api" // for local development
    : "https://assignment-8hzp.onrender.com/api", // for deployed production
});

export default API;
