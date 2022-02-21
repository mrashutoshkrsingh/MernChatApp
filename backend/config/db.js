const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    console.log(process.env.PORT);
    const conn = await mongoose.connect(process.env.MONGO_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
