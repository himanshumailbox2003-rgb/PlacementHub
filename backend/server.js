require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
const jobRoutes = require('./src/routes/jobs');
const userRoutes = require('./src/routes/users');
const path = require('path');

const app = express();

// ✅ FIXED CORS — allows your new Vercel domain
app.use(
  cors({
    origin: [
      "https://placement-hub-kappa.vercel.app", // your Vercel frontend
      "http://localhost:3000"                   // local testing
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
  })
);

// Allow preflight
app.options("*", cors());

app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// PORT
const PORT = process.env.PORT || 5000;

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error", err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

// Test route
app.get('/', (req, res) => {
  res.json({ ok: true, message: "PlacementHub backend working" });
});

// Start server
app.listen(PORT, () => console.log("Server running on port", PORT));
