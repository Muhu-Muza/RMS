const mongoose = require("mongoose");

const connectDb = async () => {

  console.log(process.env.CONNECTION_STRING)
  try {
    const connect = await mongoose.connect("mongodb+srv://schumannivan:5GBQqTMIkoWiHqfj@restaurantmanagement.jytd532.mongodb.net/?retryWrites=true&w=majority");
    console.log(
      "Database connected:",
      connect.connection.host,
      connect.connection.name
    );
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
