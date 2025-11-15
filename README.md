PlacementHub

A full-stack Training and Placement Management System designed for academic institutions and training organizations.
PlacementHub delivers a streamlined workflow for job postings, student applications, recruiter dashboards, authentication, and resume handling.
The system is built using the MERN stack and fully deployed on cloud platforms for production-grade performance.

Production Deployment
Frontend (Vercel)

https://placement-hub-kappa.vercel.app/

Backend (Render)

https://placementhub-backend.onrender.com/

Overview

PlacementHub simulates a real-world recruitment and placement automation platform.
It provides role-based access for students and recruiters, enabling features such as job creation, job application, resume uploads, and secured authentication.
The UI is designed with a modern dark theme, responsive layout, and smooth transitions for an enhanced user experience.

Key Features

Secure user authentication using JSON Web Tokens (JWT).

Role-based access control (Student / Recruiter).

Recruiter functionality: create, manage, and publish job openings.

Student functionality: browse available jobs and submit applications.

Resume upload support using Multer.

Modern UI with responsive layout and thematic styling.

Global state handling with clean API integration using Axios.

Fully deployed on Vercel and Render with a cloud-hosted MongoDB database.

Robust backend architecture with modular routing, controllers, and middleware.

Technology Stack
Frontend

React.js

React Router

Axios

Custom CSS (modern dark UI)

Component-based architecture

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose ORM

Multer (file uploads)

JWT Authentication

CORS middleware

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas (Cloud Hosted)

System Architecture
Client (React)  →  Vercel Hosting  
     ↓  
API Layer (Express.js)  →  Render Hosting  
     ↓  
Database (MongoDB Atlas)


The frontend communicates with the backend using REST APIs.

Authentication is handled through JWT.

File uploads (resumes) are stored in the backend’s uploads directory.

CORS is configured to support multiple Vercel deployments.

Folder Structure
PlacementHub/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── models/
│   │   └── middleware/
│   ├── server.js
│   └── uploads/
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── App.js
    │   ├── index.js
    │   └── styles.css
    └── public/

Setup Instructions (Local Installation)
1. Clone Repository
git clone https://github.com/himanshumailbox2003-rgb/PlacementHub.git
cd PlacementHub

2. Backend Setup
cd backend
npm install


Create .env file:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret


Start backend server:

npm start


Backend runs at:
http://localhost:5000

3. Frontend Setup
cd ../frontend
npm install
npm start


Frontend runs at:
http://localhost:3000

API Endpoints
Authentication

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

Job Management

GET /api/jobs

POST /api/jobs (Recruiter only)

POST /api/jobs/:id/apply (Student only)

Security Measures

JWT-based authentication for protected routes.

Passwords hashed before storage using industry practices.

Role-based authorization for Recruiter and Student functionalities.

Strict CORS policy with dynamic origin validation for Vercel deployments.

Credits

Developer: Himanshu Tandon
Email: himanshumailbox2003@gmail.com

GitHub: https://github.com/himanshumailbox2003-rgb

License

This project is open-source and may be used for academic learning, portfolio development, or personal research.
