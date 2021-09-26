require('dotenv').config();
const express = require('express');

const gmailCall = require('./nodemailer');
// const qbCall = require('./quickbase');

const app = express();

app.use(express.json());

app.post('/send', async (req, res) => {
  try {
    const { serverPw, email, password, to, subject, text } = req.body;

    if (serverPw !== process.env.SERVER_PASS) return res.sendStatus(401);

    await gmailCall(email, password, to, subject, text);

    // const qbResponse = await qbCall();

    // if (qbResponse.status !== 200) return res.sendStatus(400);

    return res.sendStatus(200);
  } catch (err) {
    return res.status(400).send(err);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT);
