const express = require('express');
const router = express.Router();
const Projects = require('../models/Projects');
require('../models/db');

// const projectImages = [
//   {
//     "title": "Autocad 2D Map",
//     "images": [
//       "http://localhost:5000/images/2d1.webp",
//       "http://localhost:5000/images/2d3.png",
//       "http://localhost:5000/images/1.webp",
//       "http://localhost:5000/images/2d4.jpg"
//     ]
//   },
//   {
//     "title": "Front Elevation Plans",
//     "images": [
//       "http://localhost:5000/images/f1.jpg",
//       "http://localhost:5000/images/f2.jpg",
//       "http://localhost:5000/images/f3.jpg",
//       "http://localhost:5000/images/f4.webp"
//     ]
//   },
//   {
//     "title": "3D Glimpse",
//     "images": [
//       "http://localhost:5000/images/3d1.jpg",
//       "http://localhost:5000/images/3d2.jpg",
//       "http://localhost:5000/images/3d3.jpg",
//       "http://localhost:5000/images/3d4.jpg",
//       "http://localhost:5000/images/3d5.jpg",
//       "http://localhost:5000/images/3d6.jpg"
//     ]
//   }
// ]

router.get('/', async (req, res) => {
  try {
    const project = await Projects.find();
    res.json(project);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
