const { authorize } = require("../middleware/authorize.middleware")
const { authentication } = require("../middleware/authentication.middleware")
const { corsOptions } = require("../middleware/cors.middleware")

module.exports = {
     authorize,
     authentication,
     corsOptions
}