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

    const validTo = to.replaceAll(';', ',');

    await gmailCall(validTo, subject, text);

    return res.sendStatus(200);
  } catch (err) {
    console.log(err);
    return res.status(400).send(err);
  }
});

app.listen(process.env.PORT);
