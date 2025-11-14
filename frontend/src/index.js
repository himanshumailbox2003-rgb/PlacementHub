import axios from "axios";

// Set backend base URL from Vercel Environment Variable
axios.defaults.baseURL = process.env.REACT_APP_API;

console.log("Backend URL => ", axios.defaults.baseURL);
