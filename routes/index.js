const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/nelson', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/nelson');
});
router.get('/ironhackers/sofia', (req, res, next) => {
  // Render "/views/ironhackers/sofia.hbs"
  res.render('ironhackers/sofia');
});

module.exports = router;
