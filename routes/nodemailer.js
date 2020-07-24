const router = require('express').Router();
const nodemailer = require('nodemailer');

router.post('/',  ({body: {email, message}}, response) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });

    // Specify what the email will look like
  const emailContent = {
    from: 'nodemailer app', // This is ignored by Gmail
    to: process.env.GMAIL_USER,
    subject: 'New message from contact form at elliotfouts.com',
    text: `(${email}) says: ${message}`
  }

  // Attempt to send the email
  transporter.sendMail(emailContent, (error, res) => {
    if (error) {
      console.log(error);
      response.status(500).json({error: 'could not send email', message: 'something went wrong; I am on it!'});
    }
    else {
      response.json({message: 'email successfully sent!'});
    }
  })
});

module.exports = router;