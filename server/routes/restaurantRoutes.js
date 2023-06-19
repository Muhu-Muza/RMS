const express = require('express');
const router = express.Router();
const multer = require('multer');

const {
  getRestaurants,
  getRestaurant,
  createRestaurant,
  updateRestaurant,
  deleteRestaurant,
} = require("../controllers/restaurantControllers");

const upload = multer({ dest: 'uploads/' });

router.route('/').post(upload.single('file'), createRestaurant);
router.route('/').get(getRestaurants);
router.route('/:id').get(getRestaurant);
router.route('/:id').put(updateRestaurant);
router.route('/:id').delete(deleteRestaurant);

module.exports = router;
