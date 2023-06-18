const express = require('express');
const router = express.Router();

const {
    getRestaurants,
    getRestaurant,
    createRestaurant,
    updateRestaurant,
    deleteRestaurant,
  } = require("../controllers/restaurantControllers");

router.route('/').post(createRestaurant)
router.route('/').get(getRestaurants)
router.route('/:id').get(getRestaurant) 
router.route('/:id').put(updateRestaurant) 
router.route('/:id').delete(deleteRestaurant)



module.exports = router;
