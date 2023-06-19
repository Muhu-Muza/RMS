const Restaurant = require('../models/restaurant');

// Create a new restaurant
const createRestaurant = async (req, res) => {
    try {
      const restaurant = new Restaurant({
        name: req.body.name,
        information: {
          cuisine: req.body.cuisine,
          location: req.body.location,
          image: req.body.image,
        },
      });
  
      const savedRestaurant = await restaurant.save();
  
      res.status(201).json(savedRestaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Get all restaurants
const getRestaurants = (async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get a single restaurant
const getRestaurant = async (req, res) => {
    try {
      const { id } = req.params;
      const restaurant = await Restaurant.findById(id);
      if (!restaurant) {
        return res.status(404).json({ message: 'Restaurant not found' });
      }
      res.json(restaurant);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };

// Update a restaurant
const updateRestaurant = ( async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    await Restaurant.findByIdAndUpdate(id, { name, description });

    res.json({ message: 'Restaurant updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete a restaurant
const deleteRestaurant = (async (req, res) => {
  try {
    const { id } = req.params;

    await Restaurant.findByIdAndDelete(id);

    res.json({ message: 'Restaurant deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = {
    createRestaurant,
    getRestaurants,
    getRestaurant,
    updateRestaurant,
    deleteRestaurant
};
