import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/" className="logo">
          PlacementHub
        </Link>
      </div>

      <div className="nav-right">
        <Link
          to="/"
          className={location.pathname === "/" ? "active nav-link" : "nav-link"}
        >
          Home
        </Link>

        <Link
          to="/login"
          className={
            location.pathname === "/login" ? "active nav-link" : "nav-link"
          }
        >
          Login
        </Link>

        <Link
          to="/register"
          className={
            location.pathname === "/register" ? "active nav-link" : "nav-link"
          }
        >
          Register
        </Link>

        {/* Dark Mode Toggle */}
        <button
          className="theme-toggle"
          onClick={() => {
            document.body.classList.toggle("light-mode");
          }}
        >
          ☀️
        </button>
      </div>
    </nav>
  );
}
