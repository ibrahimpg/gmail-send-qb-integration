const nodemailer = require('nodemailer');

module.exports = (email, password, to, subject, text) => nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: email,
    pass: password,
  },
}).sendMail({
  to, from: email, subject, text,
});
