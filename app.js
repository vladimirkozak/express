const express = require('express');

const shopRoutes = require('./routes/shop.js');

const app = express();

app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).send(JSON.stringify({message: 'Page not found'}));
});

app.listen(3000);