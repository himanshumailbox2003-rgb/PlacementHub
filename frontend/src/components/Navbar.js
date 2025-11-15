import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="nav">
      <div className="nav-inner">
        <div className="brand">
          <Link to="/" className="brand-link">PlacementHub</Link>
        </div>

        <nav className="nav-right">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/login" className="nav-link">Login</Link>
          <Link to="/register" className="nav-link">Register</Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
