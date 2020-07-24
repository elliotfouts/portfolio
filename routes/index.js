const router = require('express').Router();
const nodemailerRoutes = require('./nodemailer');
const path = require('path');

// API routes
router.use('/email', nodemailerRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;