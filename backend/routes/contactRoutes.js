const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    // ✅ Gmail transporter setup
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail App Password
      },
    });

    // ✅ Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.EMAIL_USER}>`, // your Gmail as sender
      replyTo: email, // user’s email as reply-to
      to: process.env.ADMIN_EMAIL, // destination email (your inbox)
      subject: "New Contact Message",
      text: `
        You have received a new message from your contact form:

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    });

    res.status(200).json({ success: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ Email sending failed:", error);
    res.status(500).json({ error: "Failed to send message" });
  }
});

module.exports = router;
