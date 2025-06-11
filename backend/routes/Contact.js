const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
require('../models/db')

// POST: Save contact form data
router.post('/', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({ message: 'Message sent successfully!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Something went wrong!' });
  }
});

module.exports = router;
