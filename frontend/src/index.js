import axios from "axios";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// Set base URL from environment variable
axios.defaults.baseURL = process.env.REACT_APP_API;
console.log("Backend URL => ", axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
