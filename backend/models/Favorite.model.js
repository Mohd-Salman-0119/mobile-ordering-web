const mongoose = require("mongoose");

const favoriteSchema = {
     name: { type: String, required: true },
     type: { type: String, required: true },
     price: { type: Number, required: true },
     processor: { type: String, required: true },
     memory: {
          RAM: { type: String, required: true },
          storage: { type: String, required: true }
     },
     os: { type: String, required: true },
     description: { type: String, required: true },
     image: { type: String, required: true },
     discount: { type: Number, required: true },
     actual_price: { type: Number, required: true },
     user_email: { type: String, required: true },
}

const FavoriteModel = mongoose.model("favorite", favoriteSchema)

module.exports = { FavoriteModel }