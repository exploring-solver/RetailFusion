const express = require('express');
const router = express.Router();
const { placeOrder } = require('../controllers/OrderController');
const auth = require('../../../middlewares/auth');

router.post('/', auth, async (req, res) => {
    try {
        const userId = req.user._id;
        const { productIds, quantities } = req.body;

        if (!productIds || !quantities || productIds.length !== quantities.length) {
            return res.status(400).json({ message: 'Invalid request. Please provide product IDs and quantities.', success: false });
        }
        await placeOrder(userId, productIds, quantities, res);
    } catch (error) {
        res.status(500).json({ message: error.message, success: false });
    }
});

module.exports = router;
