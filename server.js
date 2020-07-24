require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const {nodemailerRoutes} = require('./routes');

// instantiate express and set port
const PORT = process.env.PORT || 3001;
const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 
app.use('/email', nodemailerRoutes);


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'));
  });
}

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
