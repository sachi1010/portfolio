const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true } // URL to the image
});

module.exports = mongoose.model('Skill', SkillSchema);
