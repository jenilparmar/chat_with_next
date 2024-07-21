import otpStore from "./otpStore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, otp } = req.body;

    if (!email || !otp) {
      return res.status(400).json({ message: "Email and OTP are required" });
    }

    const storedOtp = otpStore[email];
    if (!storedOtp) {
      return res.status(400).json({ message: "Try Refreshing the Page!!" });
    }

    if (Date.now() > storedOtp.expires) {
      return res.status(400).json({ message: "OTP expired" });
    }

    if (storedOtp.otp === otp) {
      return res.status(200).json({ message: "OTP verified successfully" });
    } else {
      return res.status(400).json({ message: "Invalid OTP" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
