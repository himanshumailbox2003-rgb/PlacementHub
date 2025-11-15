import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import axios from "axios";
import Preloader from "./components/Preloader";
import "./styles.css";

axios.defaults.baseURL = "https://placementhub-backend.onrender.com/";
axios.defaults.withCredentials = false;

function Root() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    function onLoad() { setReady(true); }
    if (document.readyState === "complete") setReady(true);
    else window.addEventListener("load", onLoad);
    return () => window.removeEventListener("load", onLoad);
  }, []);

  if (!ready) return <Preloader />;
  return <App />;
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
