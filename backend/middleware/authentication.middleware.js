const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
     const { name, email, password } = req.body;

     if (req.url === "/login" && (!email || !password)) {
          res.send({ msg: "Invalid creatential!" });
     } else if (req.url === "/signup" && (!name || !email || !password)) {
          res.send({ msg: "Invalid creatential!" });
     } {
          next()
     }


}

module.exports = { authentication }