require('dotenv').config();


const express = require('express');
const multer = require('multer');
const path = require('path');
const connectDb = require("./config/dbConnection");
const Restaurant = require('./models/restaurant');

connectDb();
const app = express();


app.use(express.json());
app.use("/api/restaurants", require("./routes/restaurantRoutes"));

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const extension = path.extname(file.originalname);
    cb(null, file.fieldname + '-' + uniqueSuffix + extension);
  },
});

// Create the multer instance
const upload = multer({ storage: storage });

// // Define a route handler for file upload
// app.post('/upload', upload.single('file'), (req, res) => {
//   // Access the uploaded file via req.file
//   // Perform further processing here, such as storing the file path in the database

//   res.json({ message: 'File uploaded successfully' });
// });

app.post('/upload', upload.single('file'), async (req, res) => {
    try {
      // Access the uploaded file via req.file
      const file = req.file;
  
      // Perform further processing here
      // For example, you can store the file path in the database using Mongoose
      const restaurant = new Restaurant({
        name: req.body.name,
        information: {
          cuisine: req.body.cuisine,
          location: req.body.location,
          image: file.path, // Assuming the file path is stored in the "path" property of the file object
        },
      });
      await restaurant.save();
  
      res.json({ message: 'File uploaded and data stored successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
});



app.listen(5000, () => {
  console.log('Server is running on port 5000');
});

module.exports = app;