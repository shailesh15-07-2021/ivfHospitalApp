const DoctorDB = require("../../../model/UserModel");
const shortId = require("shortid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// Load input validations
const validateDoctorInput = require("../../../validation/UserCreateValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDoctorInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  DoctorDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.name, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const Doctor = DoctorDB({
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
        bcrypt.hash(Doctor.password, salt, (err, hash) => {
          if (err) throw err;
          Doctor.password = hash;
          Doctor.save()
            .then((data) => {
              res.status(201).json({
                msg: "Doctor Details added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
