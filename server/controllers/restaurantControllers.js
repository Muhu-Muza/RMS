const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

// Create a new restaurant
const createRestaurant = (async (req, res) => {
  try {
    const { name, description } = req.body;
    const image = req.file.filename;

    const restaurant = new Restaurant({ name, description, image });
    await restaurant.save();

    res.status(201).json({ message: 'Restaurant created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

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
