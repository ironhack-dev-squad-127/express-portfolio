const express = require('express');
const router  = express.Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/ironhackers/maxence', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/maxence');
});

router.get('/ironhackers/doris', (req, res, next) => {
  // Render "/views/ironhackers/maxence.hbs"
  res.render('ironhackers/doris');
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
