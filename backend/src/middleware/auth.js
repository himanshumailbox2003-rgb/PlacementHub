const jwt = require('jsonwebtoken');
const User = require('../models/User');
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret';

async function auth(req,res,next){
  const authHeader = req.headers.authorization;
  if(!authHeader) return res.status(401).json({error:'Missing auth header'});
  const token = authHeader.split(' ')[1];
  try{
    const data = jwt.verify(token, JWT_SECRET);
    const user = await User.findById(data.id).select('-password');
    if(!user) return res.status(401).json({error:'Invalid user'});
    req.user = user;
    next();
  }catch(e){
    return res.status(401).json({error:'Invalid token'});
  }
}

function permit(...roles){
  return (req,res,next)=>{
    if(!req.user) return res.status(401).json({error:'Unauthorized'});
    if(!roles.includes(req.user.role)) return res.status(403).json({error:'Forbidden'});
    next();
  }
}

module.exports = { auth, permit };
