const PatientDB = require("../../../model/UserModel");
const shortId = require("shortid");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");

// Load input validations
const validatePatientInput = require("../../../validation/UserCreateValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePatientInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  PatientDB.findOne({ email: req.body.email }).then((user) => {
    errors.email = "Email already exists";
    if (user) {
      return res.status(400).json(errors);
    } else {
      const avatar = gravatar.url(req.body.name, {
        s: "200", // size
        r: "pg", // rating
        d: "mm", // default
      });

      const Patient = PatientDB({
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
        bcrypt.hash(Patient.password, salt, (err, hash) => {
          if (err) throw err;
          Patient.password = hash;
          Patient.save()
            .then((data) => {
              res.status(201).json({
                msg: "Patient Details added Sucessfully",
                data: data,
              });
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
};
