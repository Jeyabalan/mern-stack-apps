import OTP from "../models/otp";

const generateOTP = async (req, res) => {
  try {
    const otpNumber = Math.floor(Math.random() * 10000);
    const otp = new OTP({
      timer: 1000,
      isOTPValidated: true,
      otpNumber,
    });
    const response = await otp.save();
    res.status(201).json({ success: true, data: response });
  } catch (error) {
    console.log(`Error in Generate OTP, ${error}`);
    res.status(500).json({ error });
  }
};

const checkOtp = async (req, res) => {
  try {
    const { _id, otpNumber } = req.body;
    const isOtpValid = await OTP.findOne({ _id, otpNumber });
    res.status()
  } catch (error) {
    console.log(`Error in Otp validation, ${error}`);
    res.status(500).json({ error });
  }
};

export { generateOTP };
