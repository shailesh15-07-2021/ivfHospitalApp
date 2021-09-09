const AdminDB = require("../../../model/Admin/Auth");
const bcrypt = require("bcryptjs");
const shortid = require("shortid");
const gravatar = require("gravatar");

// Load input validations
const validateUserInput = require("../../../validation/Admin/RegisterValidation");
module.exports = (req, res, next) => {
  const { errors, isValid } = validateUserInput(req.body);
  // console.log(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  AdminDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const newUser = new AdminDB({
        fullName: req.body.fullName,
        email: req.body.email,
        username: shortid.generate(),
        password: req.body.password,
        password2: req.body.password2,
        mobile: req.body.mobile,
        avatar,
      });

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((data) => {
              res.status(201).json({
                msg: "User added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
