const Store = require('../models/Store');

exports.getNearbyStores = async (req, res) => {
  try {
    const { latitude, longitude } = req.query;
    const stores = await Store.find({
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [parseFloat(longitude), parseFloat(latitude)]
          },
          $maxDistance: 10000 // 10km radius
        }
      }
    });
    res.json(stores);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};