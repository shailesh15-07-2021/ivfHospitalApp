const PharmacyDB = require("../../../model/UserModel");
const shortId = require("shortid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// Load input validations
const validatePharmacyInput = require("../../../validation/UserCreateValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  PharmacyDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.name, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const Pharmacy = PharmacyDB({
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
        bcrypt.hash(Pharmacy.password, salt, (err, hash) => {
          if (err) throw err;
          Pharmacy.password = hash;
          Pharmacy.save()
            .then((data) => {
              res.status(201).json({
                msg: "Pharmacy Details added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
