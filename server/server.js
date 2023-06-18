const express = require('express');
const multer = require('multer');
const path = require('path');


const app = express();

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

// Define a route handler for file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // Access the uploaded file via req.file
  // Perform further processing here, such as storing the file path in the database

  res.json({ message: 'File uploaded successfully' });
});


app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
