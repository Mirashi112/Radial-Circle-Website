const transporter = require("../config/mailer");
const validator = require("../utils/validateInput");

exports.sendMessage = async (req, res) => {
  const { name, email, message } = req.body;

  // Validate input
  const error = validator({ name, email, message });
  if (error) return res.status(400).json({ success: false, message: error });

  try {
    // Email content
    const mailOptions = {
      from: email,
      to: process.env.ADMIN_EMAIL,
      subject: `New Message from ${name}`,
      text: `
        You received a new message from your website contact form.

        Name: ${name}
        Email: ${email}

        Message:
        ${message}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Message sent successfully!" });
  } catch (err) {
    console.error("Email error:", err);
    res.status(500).json({ success: false, message: "Failed to send message." });
  }
};
