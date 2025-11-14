import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import axios from "axios";

// HARD-CODE BACKEND URL (BEST FOR YOUR PROJECT)
axios.defaults.baseURL = "https://placementhub-backend.onrender.com";

console.log("Backend URL => ", axios.defaults.baseURL);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
