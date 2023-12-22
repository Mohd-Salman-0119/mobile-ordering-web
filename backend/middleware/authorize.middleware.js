const jwt = require("jsonwebtoken");

const authorize = (req, res, next) => {

    const token = req.headers.authorization?.split(" ")[1];

     if (!token) {
          res.send({ msg: "login first" })
     }
     jwt.verify(token, "devtwon", async (err, decode) => {
          if (decode) {
               const userId = decode.userId;
               req.userId = userId;
               next();
          }
     })
}

module.exports = { authorize }