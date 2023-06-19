const mongoose = require('mongoose');

const informationSchema = new mongoose.Schema({
  cuisine: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: false },
});

const restaurantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  information: { type: informationSchema, required: true }
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
