const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/carla', (req, res, next) => {
  // Render "/views/ironhackers/carla.hbs"
  res.render('ironhackers/carla');
});

module.exports = router;
