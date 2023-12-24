require("dotenv").config()
const { express, bcrypt, jwt, cors } = require("./imports/modules.imports")

const { authentication, authorize, corsOptions } = require("./imports/middleware.imports")
const { UserModel } = require("./imports/models.imports")

const { mobileController, orderController, favoriteController } = require("./imports/controllers.imports")
const { connectDB } = require("./config/db")


const app = express();
app.use(express.json());
app.use(cors(corsOptions));

app.get("/data", async (req, res) => {
     res.setHeader("content-type", "text")
     try {
          const data = fs.readFileSync("./data.json", { encoding: "utf-8" });
          res.send(data)
     } catch (error) {

     }
})

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
                    res.send({ msg: "Login successfull", auth: true, token })
               }
          });
     } catch (error) {
          res.send({ msg: "something went worng plz try again leter", auth: false })
     }
})

app.get("/ping", (req, res) => {
     res.send({ msg: "Pong" })
})







app.use("/mobiles", mobileController)


app.use(authorize)
app.use("/order", orderController)
app.use("/favorite", favoriteController)






const PORT = process.env.PORT;


connectDB().then(() => {
     app.listen(PORT, () => {

          console.log("Server is runing on PORT", PORT)
     })
})


