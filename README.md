# PlacementHub  
A full-stack Training and Placement Management Platform designed to streamline student registrations, recruiter operations, job postings, and resume-based job applications.

---

## Introduction

PlacementHub is a complete end-to-end placement portal built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.  
This application provides a structured workflow for students and recruiters, offering job posting, job application, authentication, file upload, and role-based dashboard features.  

The project is fully deployed on Render (backend) and Vercel (frontend).

---

## Features

### Student Features
- Register and log in
- View all available job opportunities
- Upload resume (PDF)
- Apply for jobs

### Recruiter Features
- Register and log in
- Create and manage job postings

### System & Security
- JWT authentication and authorization
- Role-based access control
- Password hashing using bcrypt
- Resume file upload using Multer
- MongoDB Atlas cloud storage
- CORS-secured API communication

---

## Tech Stack

### Frontend
- React.js (Create React App)
- React Router DOM
- Axios
- Custom UI components

### Backend
- Node.js
- Express.js
- Multer for file uploads
- JWT for authentication
- Bcrypt for password hashing

### Database
- MongoDB Atlas
- Mongoose ORM

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## Folder Structure

```
PlacementHub/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles.css
│   └── package.json
│
└── README.md
```

---

## Backend Setup

1. Navigate to the backend folder:
```bash
cd backend
```

2. Install all dependencies:
```bash
npm install
```

3. Create a `.env` file:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

4. Start the backend:
```bash
npm start
```

Backend runs at:
```
http://localhost:5000
```

---

## Frontend Setup

1. Navigate to the frontend folder:
```bash
cd frontend
```

2. Install all required packages:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Frontend runs at:
```
http://localhost:3000
```

---

## Deployment Guide

### Deploying Backend (Render)
- Create a new Web Service
- Build Command: `npm install`
- Start Command: `npm start`
- Environment Variables:
  - `MONGO_URI`
  - `JWT_SECRET`
- Publish root directory: `/backend`

### Deploying Frontend (Vercel)
- Framework Preset: Create React App
- Root Directory: `/frontend`
- Build Command: `npm run build`
- Output Directory: `build`

---

## Live URLs

**Frontend:**  
https://placement-hub-kappa.vercel.app  

**Backend API:**  
https://placementhub-backend.onrender.com  

---

## Author & Contact

**Name:** Himanshu  
**Email:** himanshumailbox2003@gmail.com  
**GitHub:** https://github.com/himanshumailbox2003-rgb  

For any queries, collaboration, or improvements, feel free to reach out via email or GitHub.

---

## Credits

This project was independently developed by Himanshu, including frontend, backend, API integration, database modeling, file upload handling, and deployment.

Special acknowledgement to the open-source community and the technologies powering this project:  
React, Node.js, Express.js, MongoDB, Render, and Vercel.

---

## License

This project is developed for academic, demonstration, and portfolio purposes.  
You may clone, customize, or extend it for personal learning or training use.

