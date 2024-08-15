const express = require('express');
const router = express.Router();
const storeController = require('../controllers/StoreController');

router.get('/nearby', storeController.getNearbyStores);

module.exports = router;