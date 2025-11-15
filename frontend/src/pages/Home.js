import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  return (
    <div className="home-wrapper">
      <div className="home-card animate">
        <h1 className="title">PlacementHub</h1>

        <p className="subtitle">
          A modern platform that connects students and recruiters with seamless job posting,
          applications, authentication, and resume management.
        </p>

        <div className="features">
          <div className="feature-box animate">
            <h3>For Students</h3>
            <p>Browse job openings, upload resumes, and apply instantly.</p>
          </div>

          <div className="feature-box animate">
            <h3>For Recruiters</h3>
            <p>Post roles, manage applicants, and streamline hiring.</p>
          </div>
        </div>

        <div className="buttons">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/register" className="btn outline">Register</Link>
        </div>
      </div>
    </div>
  );
}
