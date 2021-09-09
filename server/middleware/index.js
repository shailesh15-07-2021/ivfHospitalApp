const jwt = require("jsonwebtoken");

// Authentication Middelware
module.exports = (req, res, next) => {
  try {
    var etoken = req.headers.authorization.split(" ")[1];
    var decode = jwt.verify(etoken, process.env.JWT_SECRET);
    req.userData = decode;
    next();
  } catch {
    res.status(401).json({
      error: "Invalid Token",
    });
  }
};
