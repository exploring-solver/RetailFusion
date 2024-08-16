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
  //   app.get('/api/product/:ean', async (req, res) => {
  //     const ean = req.params.ean;
  //     const apiUrl = `https://api.barcodespider.com/v1/lookup?token=3cb93207e05597b307ba&upc=${ean}`;

  //     try {
  //         const response = await axios.get(apiUrl);

  //         if (response.data.item_response.code !== 200) {
  //             return res.status(400).json({ error: response.data.item_response.message || 'Error retrieving data' });
  //         }

  //         const itemAttributes = response.data.item_attributes;
  //         const initials = itemAttributes.title.split(' ').map(word => word[0]).join('');
  //         const randomString = generateSKU();
  //         const sellerSKU = `${initials}-${randomString}`;

  //         const formattedResponse = {
  //             product_name: itemAttributes.title,
  //             mrp: itemAttributes.highest_price || '0.00',
  //             gst_percentage: '',
  //             ean: itemAttributes.ean,
  //             description: itemAttributes.description,
  //             color: itemAttributes.color,
  //             brand: itemAttributes.brand,
  //             size: itemAttributes.size,
  //             product_image_1: itemAttributes.image,
  //             product_image_2: null,
  //             product_image_3: null,
  //             product_image_4: null,
  //             product_image_5: null,
  //             standardized: true,
  //             category: itemAttributes.category,
  //             seller_sku: sellerSKU,
  //         };

  //         res.json(formattedResponse);
  //     } catch (error) {
  //         res.status(500).json({ error: 'Internal Server Error' });
  //     }
  // });

  // function generateSKU() {
  //     return Math.random().toString(36).substr(2, 9).toUpperCase();
  // }

  // Handle 404 - Not Found
  app.use('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/admin')) {
      return next(); // Pass the request to the next middleware
    }

    // For all other URLs, return a 404 response
    res.status(404).send('Not found!!!');
  });

};
