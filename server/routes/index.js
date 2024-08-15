const express = require('express');
const statusRoutes = require('../src/health/routes');
const userRoutes = require('../src/users/userRoutes');
const storeRoutes = require('../src/inventory/routes/storeRoutes');
const productRoutes = require('../src/inventory/routes/productRoutes');

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json('Welcome to retailfusion where no one does the work and waits for further instructions!')
  })
  app.use('/status', statusRoutes);
  app.use('/auth', userRoutes);
  app.use('/store', storeRoutes);
  app.use('/product', productRoutes);

  // Handle 404 - Not Found
  app.use('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/admin')) {
      return next(); // Pass the request to the next middleware
    }

    // For all other URLs, return a 404 response
    res.status(404).send('Not found!!!');
  });

};
