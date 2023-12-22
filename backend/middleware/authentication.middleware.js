const jwt = require("jsonwebtoken");

const authentication = (req, res, next) => {
     const { name, email, password } = req.body;

     if (!name || !email || !password) {
          res.send({ msg: "Invalid creatential!" });
     } else {
          next()
     }


}

module.exports = { authentication }