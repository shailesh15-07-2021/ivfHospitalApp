const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const AdminDB = require("../../../model/Admin/Auth");

// Load input validations
const validateLoginInput = require("../../../validation/Admin/LoginValidation");

module.exports = (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Find the user by Email
  AdminDB.findOne({ email: email })
    .exec()
    .then((user) => {
      // check for user
      if (!user) {
        errors.email = "User not found";
        return res.status(404).json(errors);
      }

      // check Password
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          // User Matched
          const payload = {
            id: user.id,
            fullName: user.fullName,
            email: user.email,
            username: user.username,
            mobile: user.mobile,
            avatar: user.avatar,
          }; // Create JWT Payload

          // Sign Token
          jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 3600 },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token,
              });
            }
          );
        } else {
          errors.password = "Password incorrect";
          return res.status(400).json(errors);
        }
      });
    });
};
