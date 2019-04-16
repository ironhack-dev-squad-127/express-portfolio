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
})
router.get('/ironhackers/diogo', (req, res, next) => {
  // Render "/views/ironhackers/diogo.hbs"
  res.render('ironhackers/diogo');
});

router.get('/ironhackers/guilherme', (req, res, next) => {
  res.render('ironhackers/guilherme');
});

router.get('/ironhackers/carla', (req, res, next) => {
  // Render "/views/ironhackers/carla.hbs"
  res.render('ironhackers/carla');
});

router.get('/ironhackers/sofia', (req, res, next) => {
  // Render "/views/ironhackers/sofia.hbs"
  res.render('ironhackers/sofia');
});

router.get('/ironhackers/hugo', (req, res, next) => {
  // Render "/views/ironhackers/sofia.hbs"
  res.render('ironhackers/hugo');

});

module.exports = router;
