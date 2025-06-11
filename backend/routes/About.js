const express = require('express');
const router = express.Router();
const About = require('../models/About');
require('../models/db')

// Get About Section Data
router.get('/', async (req, res) => {
  try {
    const about = await About.findOne();
    res.json(about);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
