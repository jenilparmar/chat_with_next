// pages/api/verify-otp.js

export default async function handler(req, res) {
    if (req.method === "POST") {
      const { email, otp } = req.body;
  
      const storedOtp = otpStore[email];
  
      if (!storedOtp) {
        return res.status(400).json({ message: "OTP not found" });
      }
  
      if (Date.now() > storedOtp.expires) {
        return res.status(400).json({ message: "OTP expired" });
      }
  
      if (storedOtp.otp === otp) {
        delete otpStore[email];
        return res.status(200).json({ message: "OTP verified successfully" });
      } else {
        return res.status(400).json({ message: "Invalid OTP" });
      }
    } else {
      res.status(405).json({ message: "Method not allowed" });
    }
  }
  