import React from "react";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col">
          <div className="brand">PlacementHub</div>
          <p className="muted">Connecting students & recruiters for internships and placements.</p>
        </div>

        <div className="footer-col">
          <div className="footer-title">Quick Links</div>
          <a href="/" className="footer-link">Home</a>
          <a href="/login" className="footer-link">Login</a>
          <a href="/register" className="footer-link">Register</a>
        </div>

        <div className="footer-col">
          <div className="footer-title">Contact</div>
          <div className="muted">himanshumailbox2003@gmail.com</div>
        </div>
      </div>

      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} PlacementHub. All rights reserved.
      </div>
    </footer>
  );
}
