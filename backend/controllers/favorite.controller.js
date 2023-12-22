const { express } = require("../imports/modules.imports")
const { UserModel, FavoriteModel } = require("../imports/models.imports")

const favoriteController = express.Router()

favoriteController.get("/", async (req, res) => {
     console.log(req.userId)
     try {

          const mobiles = await FavoriteModel.find();
          res.send({ wishlist: mobiles })
     } catch (error) {
          res.send({ msg: "something went wrong. Plz try again leter" })
     }
})

favoriteController.post("/", async (req, res) => {
     const payload = req.body;
     const userID = req.userId;
     try {
          const user = await UserModel.findOne({ _id: userID })
          const user_email = user?.email;

          await FavoriteModel.create({ ...payload, user_email });
          res.send({ msg: "product  added in wishlist successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while added the product" });
     }
})

favoriteController.delete("/:ID", async (req, res) => {
     const productID = req.params.ID

     try {
          await FavoriteModel.findByIdAndDelete(productID)
          res.send({ msg: "Product deleted from wishlist successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while deleted the product" });
     }
})

module.exports = { favoriteController }
