const express = require('express');
const router = express.Router();
const Skill = require('../models/Skills');
require('../models/db')

// GET /skills - Fetch all skills
router.get('/', async (req, res) => {
  try {
    const skills = await Skill.find();
    res.json(skills);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch skills' });
  }
});

module.exports = router;

