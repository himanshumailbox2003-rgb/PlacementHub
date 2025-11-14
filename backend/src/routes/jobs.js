const express = require('express');
const router = express.Router();
const Job = require('../models/Job');
const Application = require('../models/Application');
const multer = require('multer');
const { auth, permit } = require('../middleware/auth');

const upload = multer({ dest: 'uploads/' });

// list jobs
router.get('/', async (req,res)=>{
  const jobs = await Job.find().populate('postedBy','name email');
  res.json({jobs});
});

// get single
router.get('/:id', async (req,res)=>{
  const job = await Job.findById(req.params.id).populate('postedBy','name email');
  if(!job) return res.status(404).json({error:'Not found'});
  res.json({job});
});

// create job (recruiter or admin)
router.post('/', auth, permit('recruiter','admin'), async (req,res)=>{
  const {title,company,location,description,skills,salary} = req.body;
  const job = await Job.create({title,company,location,description,skills: skills||[], salary, postedBy: req.user._id});
  res.json({job});
});

// update job
router.put('/:id', auth, permit('recruiter','admin'), async (req,res)=>{
  const job = await Job.findById(req.params.id);
  if(!job) return res.status(404).json({error:'Not found'});
  if(job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') return res.status(403).json({error:'Forbidden'});
  Object.assign(job, req.body);
  await job.save();
  res.json({job});
});

// delete
router.delete('/:id', auth, permit('recruiter','admin'), async (req,res)=>{
  const job = await Job.findById(req.params.id);
  if(!job) return res.status(404).json({error:'Not found'});
  if(job.postedBy.toString() !== req.user._id.toString() && req.user.role !== 'admin') return res.status(403).json({error:'Forbidden'});
  await job.remove();
  res.json({ok:true});
});

// apply to job (student) with resume upload
router.post('/:id/apply', auth, permit('student'), upload.single('resume'), async (req,res)=>{
  const jobId = req.params.id;
  const existing = await Application.findOne({job:jobId, student:req.user._id});
  if(existing) return res.status(400).json({error:'Already applied'});
  const app = await Application.create({job: jobId, student: req.user._id, resume: req.file ? req.file.path : req.user.resume});
  res.json({application: app});
});

// list applications for a job (recruiter or admin)
router.get('/:id/applications', auth, permit('recruiter','admin'), async (req,res)=>{
  const apps = await Application.find({job: req.params.id}).populate('student','name email resume');
  res.json({applications: apps});
});

module.exports = router;
