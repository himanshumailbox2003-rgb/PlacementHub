require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
const jobRoutes = require('./src/routes/jobs');
const userRoutes = require('./src/routes/users');
const path = require('path');

const app = express();

// -----------------------------
// 1) BODY PARSERS FIRST
// -----------------------------
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// -----------------------------
// 2) CORS CONFIG
// -----------------------------
app.use(
  cors({
    origin: [
      "https://placementhub-kappa.vercel.app",   // Vercel Frontend
      "http://localhost:3000"                   // Local Dev
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true
  })
);

// Allow preflight
app.options("*", cors());

// -----------------------------
// 3) STATIC FILES
// -----------------------------
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// -----------------------------
// 4) DATABASE CONNECTION
// -----------------------------
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// -----------------------------
// 5) ROUTES
// -----------------------------
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ ok: true, message: "PlacementHub backend working" });
});

// -----------------------------
// 6) START SERVER
// -----------------------------
app.listen(PORT, () => console.log("Server running on port", PORT));
