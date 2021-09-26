const nodemailer = require('nodemailer');

module.exports = (to, subject, text) => nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
}).sendMail({
  to, from: process.env.EMAIL, subject, text,
});
