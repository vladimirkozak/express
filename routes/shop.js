const express = require('express');

const router = express.Router();

router.get('/product', (req, res, next) => {
  res.send(JSON.stringify({message: {a: 1}}));
});

router.post('/add-product', (req, res, next) => {
  res.redirect('/');
});

module.exports = router;