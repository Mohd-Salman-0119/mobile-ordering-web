const mongoose = require("mongoose");

const mobileSchema = {
     name: { type: String, required: true },
     type: { type: String, required: true },
     price: { type: Number, required: true },
     processor: { type: String, required: true },
     memory: { type: String, required: true },
     os: { type: String, required: true },
     description: { type: String, required: true },
     image: { type: String, required: true },
}

const MobileModel = mongoose.model("mobile", mobileSchema)

module.exports = { MobileModel }