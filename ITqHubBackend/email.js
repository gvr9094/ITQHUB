const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  service:'gmail',
  port: 587, // Updated port to 587
  secure: true, // Use STARTTLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Wrapper function to send a verification email
function sendVerificationEmail(name, email, link) {
  async function main() {
    try {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: `"ITqHub @HrTeam" <${process.env.EMAIL_USER}>`, // sender address
        to: email, // list of receivers
        subject: "Verification mail", // Subject line
        text: `Hello ${name},\n\nPlease verify your email by clicking the link below:\n\n${link}`, // plain text body
      });

      console.log('Email sent:', info);
      return info;
    } catch (error) {
      console.error('Error sending email:', error);
      throw error;
    }
  }

  return main(); // Invoke the main function
}

module.exports = { sendVerificationEmail };
