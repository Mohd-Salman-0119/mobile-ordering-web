const express = require("express")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// import statements
const { connection } = require("./config/db")

// middleware
const { authorize } = require("./middleware/authorize.middleware")
const { authentication } = require("./middleware/authentication.middleware")

// models 
const { UserModel } = require("./models/User.model")

// controllers
const { mobileController } = require("./controllers/mobile.controller")
const { orderController } = require("./controllers/order.controller")
const { favoriteController } = require("./controllers/favorite.controller")

const app = express();
app.use(express.json());

app.post("/signup", authentication, async (req, res) => {
     const { name, password, email } = req.body
     try {
          bcrypt.hash(password, 5, async function (err, hash) {
               await UserModel.create({ name, email, password: hash })
               res.send({ msg: "Signup Successfull" })
          });

     } catch (error) {
          res.send({ msg: "something went worng plz try again leter" })
     }
})
app.post("/login", authentication, async (req, res) => {
     const { password, email } = req.body
     const user = await UserModel.findOne({ email })
     if (!user) {
          res.send({ msg: "User doesn't exist" })
     }
     const hash = user.password;
     try {
          bcrypt.compare(password, hash, async function (err, result) {
               if (result) {

                    const token = jwt.sign({ userId: user._id }, 'devtwon');
                    res.send({ msg: "Login successfull", token })
               }
          });
     } catch (error) {
          res.send({ msg: "something went worng plz try again leter" })
     }
})

app.use("/mobiles", mobileController)

app.use(authorize)

app.use("/order", orderController)
app.use("/favorite", favoriteController)

const PORT = 8080;
app.listen(PORT, async () => {
     try {
          await connection;
          console.log("Connected successfully MongoDB")
     } catch (error) {
          console.log("error while connecting to MongoDB")
          console.log(error)
     }
     console.log("Server is runing on PORT", PORT)
})