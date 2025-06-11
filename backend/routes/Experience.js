const express = require('express');
const router = express.Router();
const Experience = require('../models/Experience');
require('../models/db')

// GET all experiences
router.get('/', async (req, res) => {
  try {
    const experiences = await Experience.find().sort({ duration: -1 });
    res.json(experiences);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new experience
router.post('/', async (req, res) => {
  const experience = new Experience(req.body);
  try {
    const newExperience = await experience.save();
    res.status(201).json(newExperience);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
