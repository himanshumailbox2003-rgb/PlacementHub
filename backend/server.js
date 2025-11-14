require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const authRoutes = require('./src/routes/auth');
const jobRoutes = require('./src/routes/jobs');
const userRoutes = require('./src/routes/users');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/placementhub', {
  useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log('MongoDB connected')).catch(err=> console.error('MongoDB connection error', err));

app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req,res)=> res.json({ok:true, message:'PlacementHub API'}));

app.listen(PORT, ()=> console.log('Server running on', PORT));
