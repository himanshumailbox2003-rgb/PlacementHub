const mongoose = require('mongoose');
const ApplicationSchema = new mongoose.Schema({
  job: {type: mongoose.Schema.Types.ObjectId, ref:'Job'},
  student: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
  resume: {type:String},
  status: {type:String, enum:['applied','shortlisted','rejected','hired'], default:'applied'},
  appliedAt: {type:Date, default:Date.now}
});
module.exports = mongoose.model('Application', ApplicationSchema);
