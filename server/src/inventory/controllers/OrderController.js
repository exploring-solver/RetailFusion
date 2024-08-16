const Order = require('../models/Order');
const User = require('../../users/models/user');
const Product = require('../models/Product');

async function placeOrder(userId, productIds, quantities, res) { 
    try {
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({
                message: 'User not found',
                success: false
            });
        }
        
        const products = await Product.find({ _id: { $in: productIds } });
        let totalAmount = 0;
        const orderItems = products.map((product, index) => {
            totalAmount += product.price * quantities[index];
            return { product: product._id, quantity: quantities[index] };
        });

        const order = new Order({
            user: user._id,
            products: orderItems,
            totalAmount,
            paymentStatus: 'completed'
        });
        await order.save();

        orderItems.forEach(item => {
            user.shoppingHistory.push({
                product: item.product,
                purchaseDate: new Date()
            });
        });
        await user.save();

        return res.status(201).json({
            message: 'Order placed successfully',
            success: true,
            order
        });
    } catch (error) {
        console.error("Error: " + error);
        return res.status(500).json({
            message: 'Failed to place order',
            success: false
        });
    }
}

module.exports = { placeOrder };
