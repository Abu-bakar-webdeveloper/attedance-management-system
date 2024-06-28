import mongoose from "mongoose";
const LeaveRequestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  startDate: Date,
  endDate: Date,
  reason: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'], default: 'pending' }
});

module.exports = mongoose.model('LeaveRequest', LeaveRequestSchema);