const mongoose = require("mongoose");
require("dotenv").config();


const connectDB = async () => {
     try {
          const conn = await mongoose.connect(`${process.env.MONGO_URI}/mobile-ordering-app`);
          console.log(`MongoDB Connected: ${conn.connection.host}`);
     } catch (error) {
          console.log(error);
          process.exit(1);
     }
}

const connection = mongoose.connect(`${process.env.MONGO_URI}/mobile-ordering-app`);

module.exports = { connection, connectDB }