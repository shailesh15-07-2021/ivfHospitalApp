const EducationDB = require("../../../model/UserModel");
const shortId = require("shortid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// Load input validations
const validateEducationInput = require("../../../validation/UserCreateValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateEducationInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  EducationDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.name, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const Education = EducationDB({
        name: req.body.name,
        email: req.body.email,
        username: shortId.generate(),
        contact: req.body.contact,
        password: req.body.password,
        password2: req.body.password2,
        role: req.body.role,
        avatar,
      });

      bcrypt.genSalt(12, (err, salt) => {
        bcrypt.hash(Education.password, salt, (err, hash) => {
          if (err) throw err;
          Education.password = hash;
          Education.save()
            .then((data) => {
              res.status(201).json({
                msg: "Education Details added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
