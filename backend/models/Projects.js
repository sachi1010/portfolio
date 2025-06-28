const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema({
  title: String,
  images:String
});

module.exports = mongoose.model('Projects', projectsSchema);
