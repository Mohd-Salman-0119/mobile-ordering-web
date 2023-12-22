const { Router } = require("express");
const { OrderModel } = require("../models/Order.model")
const { UserModel } = require("../models/User.model")

const orderController = Router();

orderController.get("/", async (req, res) => {
     console.log(req.userId)
     try {

          const mobiles = await OrderModel.find();
          res.send({ orders: mobiles })
     } catch (error) {
          res.send({ msg: "something went wrong. Plz try again leter" })
     }
})

orderController.post("/", async (req, res) => {
     const payload = req.body;
     const userID = req.userId;
     try {
          const user = await UserModel.findOne({ _id: userID })
          const user_email = user?.email;

          await OrderModel.create({ ...payload, user_email });
          res.send({ msg: "order added successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while added the product" });
     }
})

orderController.delete("/:ID", async (req, res) => {
     const productID = req.params.ID

     try {
          await OrderModel.findByIdAndDelete(productID)
          res.send({ msg: "Order deleted successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while deleted the product" });
     }
})

module.exports = { orderController }

/*
Todo: see you letter

orderController.put("/:ID", async (req, res) => {
     const productID = req.params.ID
     const payload = req.body;
     try {
          await OrderModel.findByIdAndUpdate(productID, payload)
          res.send({ msg: "order replaced successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while replacing the product" });
     }
})
orderController.patch("/:ID", async (req, res) => {
     const productID = req.params.ID
     const payload = req.body;
     try {
          await OrderModel.findByIdAndUpdate(productID, payload)
          res.send({ msg: "Order updated successfully" })
     } catch (error) {
          console.log(error)
          res.send({ msg: "Error, while updated the product" });
     }
})

*/