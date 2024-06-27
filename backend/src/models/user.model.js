import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ['student', 'admin'], default: 'student' },
  profilePicture: String,
  attendance: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attendance' }],
  leaveRequests: [{ type: mongoose.Schema.Types.ObjectId, ref: 'LeaveRequest' }]
});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
  
    this.password = await bycrypt.hash(this.password, 10);
    next();
  });
  
  userSchema.methods.isPasswordCorrect = async function (password) {
    return await bycrypt.compare(password, this.password);
  };
  
  userSchema.methods.generateAccessToken = function () {
    return Jwt.sign(
      {
        _id: this._id,
        email: this.email,
        username: this.username,
        fullname: this.fullname,
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
      }
    );
  };
  userSchema.methods.generateRefreshToken = function () {
    return Jwt.sign(
      {
        _id: this._id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
      }
    );
  };

module.exports = mongoose.model('User', UserSchema);