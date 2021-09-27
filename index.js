const express = require('express');
const gmailCall = require('./nodemailer');

const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/send/:serverPw/:to/:subject/:text', async (req, res) => {
  try {
    const {
      serverPw, to, subject, text,
    } = req.params;

    const validTo = to.slice(1, to.length).replace(';', ',');

    console.log(validTo);

    if (serverPw !== process.env.SERVER_PASS) return res.sendStatus(401);

    await gmailCall(validTo, subject, text);

    return res.sendStatus(200);
  } catch (err) {
    return res.sendStatus(400);
  }
});

app.listen(process.env.PORT);
