const { express } = require("../imports/modules.imports")
const { MobileModel } = require("../imports/models.imports")
const { authorize } = require("../imports/middleware.imports")
const { textFilter, sortFilter } = require("../imports/filter.import")



const mobileController = express.Router()

mobileController.get("/", async (req, res) => {
     const { os, name, type, memory, price, q } = req.query;

     let mobiles = await MobileModel.find();

     mobiles = textFilter(mobiles, os, type, memory, q)
     mobiles = sortFilter(mobiles, price, name)

     try {

          res.send({ mobiles: mobiles })
     } catch (error) {
          res.send({ msg: "something went wrong. Plz try again leter" })
     }
})

mobileController.get("/:ID", async (req, res) => {
     const productID = req.params.ID;
     try {
          const product = await MobileModel.findOne({ _id: productID })
          res.send({ mobile: product })
     } catch (error) {
          res.send({ msg: "something went wrong. Plz try again leter" })
     }
})

mobileController.post("/", authorize, async (req, res) => {
     const payload = req.body;
     try {
          await MobileModel.create(payload);
          res.send({ msg: "Product added successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while added the product" });
     }
})

mobileController.put("/:ID", authorize, async (req, res) => {
     const productID = req.params.ID
     const payload = req.body;
     try {
          await MobileModel.findByIdAndUpdate(productID, payload)
          res.send({ msg: "Product replaced successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while replacing the product" });
     }
})
mobileController.patch("/:ID", authorize, async (req, res) => {
     const productID = req.params.ID
     const payload = req.body;
     try {
          await MobileModel.findByIdAndUpdate(productID, payload)
          res.send({ msg: "Product updated successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while updated the product" });
     }
})
mobileController.delete("/:ID", authorize, async (req, res) => {
     const productID = req.params.ID

     try {
          await MobileModel.findByIdAndDelete(productID)
          res.send({ msg: "Product deleted successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while deleted the product" });
     }
})


module.exports = { mobileController }