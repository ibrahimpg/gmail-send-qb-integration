const express = require('express');
const gmailCall = require('./nodemailer');

const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const {
      serverPw, to, subject, text,
    } = req.body;

    if (serverPw !== process.env.SERVER_PASS) return res.sendStatus(401);

    await gmailCall(to, subject, text);

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
});

app.listen(process.env.PORT);
