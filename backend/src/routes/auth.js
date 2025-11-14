const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { auth } = require('../middleware/auth');
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

router.post('/register', async (req,res)=>{
  try{
    const { name, email, password, role } = req.body;
    if(!name||!email||!password) return res.status(400).json({error:'Missing fields'});
    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({error:'Email in use'});
    const hashed = bcrypt.hashSync(password,10);
    const user = await User.create({name,email,password:hashed, role: role || 'student'});
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {expiresIn:'7d'});
    res.json({user: {id:user._id, name:user.name, email:user.email, role:user.role}, token});
  }catch(e){
    res.status(500).json({error:'Server error'});
  }
});

router.post('/login', async (req,res)=>{
  try{
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(400).json({error:'Invalid credentials'});
    const ok = bcrypt.compareSync(password, user.password);
    if(!ok) return res.status(400).json({error:'Invalid credentials'});
    const token = jwt.sign({ id: user._id }, JWT_SECRET, {expiresIn:'7d'});
    res.json({user: {id:user._id, name:user.name, email:user.email, role:user.role}, token});
  }catch(e){
    res.status(500).json({error:'Server error'});
  }
});

router.get('/me', auth, async (req,res)=>{
  res.json({user: req.user});
});

module.exports = router;
