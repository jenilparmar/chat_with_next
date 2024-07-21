import nodemailer from "nodemailer";
import otpStore from "./otpStore";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    otpStore[email] = { otp, expires: Date.now() + 300000 }; // 5 minutes expiry

    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your OTP Verification Code",
      html: `
        <p>Dear User,</p>
        <p>We received a request to provide you with a one-time password (OTP) for verification purposes. Please use the following OTP to complete your verification process:</p>
        <center><p style="font-size: 20px; font-weight: bold; color:#ed1400;">${otp}</p></center>
        <p>Please do not share this OTP with anyone. If you did not request this OTP, please disregard this email or contact our support team immediately.</p>
        <p>Thank you for your attention.</p>
        <p style="color:cyan">Best regards,<br>Chat_With_Next</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: "OTP sent successfully", otp, expires: otpStore[email].expires });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error sending OTP" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
