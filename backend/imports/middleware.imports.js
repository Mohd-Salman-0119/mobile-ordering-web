const { authorize } = require("../middleware/authorize.middleware")
const { authentication } = require("../middleware/authentication.middleware")

module.exports = {
     authorize,
     authentication
}