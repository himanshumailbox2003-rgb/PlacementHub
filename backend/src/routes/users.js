const express = require('express');
const router = express.Router();
const User = require('../models/User');
const multer = require('multer');
const { auth, permit } = require('../middleware/auth');
const upload = multer({ dest: 'uploads/' });

// list users (admin)
router.get('/', auth, permit('admin'), async (req,res)=>{
  const users = await User.find().select('-password');
  res.json({users});
});

// upload resume (student)
router.post('/resume', auth, permit('student'), upload.single('resume'), async (req,res)=>{
  if(!req.file) return res.status(400).json({error:'Missing file'});
  req.user.resume = req.file.path;
  await req.user.save();
  res.json({ok:true, resume: req.user.resume});
});

module.exports = router;
