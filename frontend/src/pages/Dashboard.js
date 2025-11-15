import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const API = "https://placementhub-backend.onrender.com";

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    load();
    loadMe();
  }, []);

  async function load() {
    try {
      const res = await axios.get(`${API}/api/jobs`);
      setJobs(res.data.jobs || []);
    } catch (e) {
      console.log("Jobs error:", e);
    }
  }

  async function loadMe() {
    try {
      const res = await axios.get(`${API}/api/auth/me`, {
        headers: { Authorization: "Bearer " + localStorage.getItem("ph_token") }
      });
      setUser(res.data.user);
    } catch (e) {
      console.log("Me error:", e);
    }
  }

  async function postJob(e) {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/jobs`,
        { title, company, description: desc },
        { headers: { Authorization: "Bearer " + localStorage.getItem("ph_token") } }
      );
      setTitle(""); setCompany(""); setDesc("");
      load();
    } catch (err) {
      alert(err.response?.data?.error || "Failed");
    }
  }

  async function apply(jobId) {
    try {
      const form = new FormData();
      const token = localStorage.getItem("ph_token");

      await axios.post(`${API}/api/jobs/${jobId}/apply`, form, {
        headers: { Authorization: "Bearer " + token }
      });

      alert("Applied");
    } catch (e) {
      alert("Failed");
    }
  }

  return (
    <>
      <Navbar />
      <div className="dashboard-grid page-wrapper">
        <div className="left-col">
          <div className="container">
            <h2>Jobs</h2>
            <div className="muted">Logged in: {user?.name} ({user?.role})</div>

            {user?.role === "recruiter" && (
              <div style={{ marginTop: 12 }}>
                <h3>Post Job</h3>
                <form onSubmit={postJob}>
                  <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
                  <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" />
                  <textarea value={desc} onChange={e => setDesc(e.target.value)} placeholder="Description" rows={4}></textarea>
                  <button type="submit">Post Job</button>
                </form>
              </div>
            )}

            <div style={{ marginTop: 18 }}>
              {jobs.length === 0 && <div className="muted">No jobs posted yet.</div>}
              {jobs.map(j => (
                <div key={j._id} className="job">
                  <div>
                    <strong>{j.title}</strong>
                    <div className="meta">{j.company}</div>
                    <div style={{ marginTop: 8 }}>{j.description}</div>
                  </div>
                  <div className="actions">
                    <button onClick={() => apply(j._id)}>Apply</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="right-col">
          <div className="container">
            <h3>Profile</h3>
            <div><strong>{user?.name}</strong></div>
            <div className="muted">{user?.email}</div>

            <hr style={{ margin: "16px 0", borderColor: "rgba(255,255,255,0.04)" }} />

            <h4>Quick Stats</h4>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <div className="feature" style={{ padding: 10, borderRadius: 8 }}>Jobs<br /><strong>{jobs.length}</strong></div>
              <div className="feature" style={{ padding: 10, borderRadius: 8 }}>Role<br /><strong>{user?.role || "-"}</strong></div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
