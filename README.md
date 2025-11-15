PlacementHub

A full-stack Training and Placement Management System designed to streamline job postings, applications, and student–recruiter interaction.
The platform provides role-based access, modern UI, secure authentication, resume uploads, and real-time job management using a MERN stack architecture.

Live Demo

Frontend (Vercel):
https://placement-hub-kappa.vercel.app/

Backend (Render):
https://placementhub-backend.onrender.com/

Features

User Authentication (JWT based)

Separate roles: Student and Recruiter

Recruiters can post new job openings

Students can view and apply to jobs

Resume upload functionality

Secure API routes with role-based access

Fully responsive modern UI

Dark mode support

Deployed on Vercel (Frontend) and Render (Backend)

MongoDB Atlas for cloud database

Technology Stack
Frontend

React.js

React Router

Axios

Modern CSS animations and custom components

Backend

Node.js

Express.js

MongoDB Atlas

Mongoose

Multer (Resume upload)

JWT Authentication

CORS Middleware

Deployment

Frontend: Vercel

Backend: Render

Database: MongoDB Atlas

Folder Structure
PlacementHub/
│
├── backend/
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   ├── uploads/
│   └── server.js
│
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── styles.css
    │   └── App.js
    └── public/

Installation and Setup (Local)
1. Clone the repository
git clone https://github.com/himanshumailbox2003-rgb/PlacementHub.git
cd PlacementHub

2. Setup Backend
cd backend
npm install


Create a .env file inside backend:

MONGO_URI=your_mongodb_atlas_url
JWT_SECRET=your_jwt_secret_key


Run backend:

npm start


Backend runs at:
http://localhost:5000

3. Setup Frontend
cd ../frontend
npm install
npm start


Frontend runs at:
http://localhost:3000

API Endpoints
Authentication
POST /api/auth/register  
POST /api/auth/login  
GET  /api/auth/me  

Jobs
GET    /api/jobs  
POST   /api/jobs                (Recruiter only)
POST   /api/jobs/:id/apply      (Student only)

Credits

Developed by Himanshu Tandon
Email: himanshumailbox2003@gmail.com

GitHub: https://github.com/himanshumailbox2003-rgb

License

This project is open-source and free to use for learning and portfolio purposes.
