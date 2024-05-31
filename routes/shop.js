const express = require('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
  res.send('<p>add-product</p>');
});

router.get('/', (req, res, next) => {
  res.send('<h1>hello</h1>');
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;