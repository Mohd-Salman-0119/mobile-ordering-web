const mongoose = require("mongoose");
require("dotenv").config();

const connection = mongoose.connect(`${process.env.MONGO_URI}/mobile-ordering-app`);

module.exports = { connection }