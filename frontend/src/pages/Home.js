import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./home.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="home-hero">
        <div className="container hero-inner">
          <div className="hero-left">
            <h1 className="hero-title">Build your career with PlacementHub</h1>
            <p className="hero-sub">A secure, fast platform connecting students to recruiters. Post jobs, apply with resumes, and track applications — all in one place.</p>

            <div className="hero-ctas">
              <Link to="/register" className="btn cta">Get Started</Link>
              <Link to="/register" className="btn outline">Create Account</Link>
            </div>

            <div className="feature-row">
              <div className="feature">
                <div className="feature-title">Fast Applications</div>
                <div className="feature-desc">One-click apply and resume management.</div>
              </div>

              <div className="feature">
                <div className="feature-title">Recruiter Tools</div>
                <div className="feature-desc">Post roles and manage candidates easily.</div>
              </div>

              <div className="feature">
                <div className="feature-title">Secure Auth</div>
                <div className="feature-desc">JWT based, password hashed & safe.</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            {/* small mockup card (no external images) */}
            <div className="mockup-card">
              <div className="mockup-header">Latest Jobs</div>
              <div className="mockup-list">
                <div className="mockup-item"><strong>Frontend Intern</strong><span> — Acme</span></div>
                <div className="mockup-item"><strong>Backend Intern</strong><span> — TechCorp</span></div>
                <div className="mockup-item"><strong>QA Intern</strong><span> — FinTech</span></div>
              </div>
              <div className="mockup-cta">View all jobs</div>
            </div>
          </div>
        </div>
      </main>

      <section className="how-it-works container">
        <h2 className="section-title">How it works</h2>
        <div className="steps">
          <div className="step">
            <div className="step-no">1</div>
            <div className="step-body"><b>Register</b><div>Create an account as a student or recruiter.</div></div>
          </div>
          <div className="step">
            <div className="step-no">2</div>
            <div className="step-body"><b>Post / Apply</b><div>Recruiters post; students apply with resume.</div></div>
          </div>
          <div className="step">
            <div className="step-no">3</div>
            <div className="step-body"><b>Shortlist</b><div>Recruiters review applications and shortlist candidates.</div></div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
