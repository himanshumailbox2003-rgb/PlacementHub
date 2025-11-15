import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo">PlacementHub</div>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero">
        <h1 className="title fade-in">
          Build Your Future with <span>PlacementHub</span>
        </h1>
        <p className="subtitle fade-in-delay">
          A modern platform for students & recruiters — manage applications,
          explore opportunities, and streamline placement operations.
        </p>

        <div className="hero-buttons fade-in-delay">
          <Link to="/login" className="btn primary">Get Started</Link>
          <Link to="/register" className="btn secondary">Create Account</Link>
        </div>
      </header>

      {/* FEATURE CARDS */}
      <section className="features-section slide-up">
        <div className="feature-card">
          <h3>Student Dashboard</h3>
          <p>Upload resumes, apply to jobs, and track your application status.</p>
        </div>

        <div className="feature-card">
          <h3>Recruiter Tools</h3>
          <p>Post jobs, manage applicants, and review resumes easily.</p>
        </div>

        <div className="feature-card">
          <h3>Secure & Fast</h3>
          <p>Powered by Node.js, Express, MongoDB & JWT Authentication.</p>
        </div>
      </section>
    </div>
  );
}
