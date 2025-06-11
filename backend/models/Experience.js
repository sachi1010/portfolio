const mongoose = require('mongoose');

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  duration: String,
  project: String,
  projects: [String]
});

module.exports = mongoose.model('Experience', experienceSchema);
