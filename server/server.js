const express = require('express');

const app = express();
const port = 5000;

app.listen(5000, () => {
    console.log(`running on port ${port}`)
})