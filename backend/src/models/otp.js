import mongoose from "mongoose";

const OTPSchema = new mongoose.Schema({
  otpNumber: { typpe: Number, required: true },
  isOTPValidated: { type: Boolean, required: true, default: false },
  timer: { type: Number, required: true, default: 1000 }
});

const OTP = mongoose.model("OTP", OTPSchema);

export default OTP;
