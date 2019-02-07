const jwt = require("jsonwebtoken")

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"]
  const token = bearerHeader ? bearerHeader.split(" ")[1] : undefined
  if (token) {
    jwt.verify(token, "randomStuff", function(err, payload) {
      if (err) throw err
      req.user = payload
      next()
    })
  } else {
    res.sendStatus(403)
  }
}

module.exports = verifyToken
