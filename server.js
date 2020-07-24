require('dotenv').config()
const express = require('express');
const nodemailer = require('nodemailer');
const path = require('path');
const routes = require('./routes');

// instantiate express and set port
const PORT = process.env.PORT || 3001;
const app = express();
// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes 
app.use(express.static('client/build'));
app.use(routes);

app.listen(PORT, function () {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
