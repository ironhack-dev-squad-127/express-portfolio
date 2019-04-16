const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/natasha', (req, res, next) => {
  // Render "/views/ironhackers/natasha.hbs"
  res.render('ironhackers/natasha');
});

module.exports = router;
