const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/diogo', (req, res, next) => {
  // Render "/views/ironhackers/diogo.hbs"
  res.render('ironhackers/diogo');
});

module.exports = router;
