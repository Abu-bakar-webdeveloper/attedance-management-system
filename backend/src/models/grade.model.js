const mongoose = require('mongoose');
const GradeSchema = new mongoose.Schema({
  criteria: String,
  minAttendance: Number,
  grade: String
});

module.exports = mongoose.model('Grade', GradeSchema);
