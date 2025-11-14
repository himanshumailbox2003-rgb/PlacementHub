import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [jobs, setJobs] = useState([]);
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [desc, setDesc] = useState('');
  const [user, setUser] = useState(null);

  useEffect(() => {
    load();
    loadMe();
  }, []);

  async function load() {
    const res = await axios.get('/api/jobs');
    setJobs(res.data.jobs);
  }

  async function loadMe() {
    try {
      const token = localStorage.getItem('ph_token');
      const res = await axios.get('/api/auth/me', {
        headers: { Authorization: 'Bearer ' + token }
      });
      setUser(res.data.user);
    } catch (e) {}
  }

  async function postJob(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem('ph_token');
      await axios.post(
        '/api/jobs',
        { title, company, description: desc },
        { headers: { Authorization: 'Bearer ' + token } }
      );

      setTitle('');
      setCompany('');
      setDesc('');
      load();
    } catch (err) {
      alert(err.response?.data?.error || 'Failed');
    }
  }

  async function apply(jobId) {
    try {
      const token = localStorage.getItem('ph_token');
      const form = new FormData();

      const file = document.getElementById('resume').files[0];
      if (file) form.append('resume', file);

      await axios.post(`/api/jobs/${jobId}/apply`, form, {
        headers: {
          Authorization: 'Bearer ' + token,
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Applied');
    } catch (err) {
      alert(err.response?.data?.error || 'Failed');
    }
  }

  return (
    <div className="container">
      <h2>Dashboard</h2>

      <div>Logged in: {user?.name} ({user?.role})</div>

      {user?.role === 'recruiter' && (
        <form onSubmit={postJob}>
          <h3>Post Job</h3>

          <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder="Title"
          />

          <input
            value={company}
            onChange={e => setCompany(e.target.value)}
            placeholder="Company"
          />

          <textarea
            value={desc}
            onChange={e => setDesc(e.target.value)}
            placeholder="Description"
          ></textarea>

          <button>Post</button>
        </form>
      )}

      <h3>Jobs</h3>

      <input type="file" id="resume" />

      {jobs.map(j => (
        <div className="job" key={j._id}>
          <strong>{j.title}</strong> — {j.company}
          <p>{j.description}</p>
          <button onClick={() => apply(j._id)}>Apply</button>
        </div>
      ))}
    </div>
  );
}
