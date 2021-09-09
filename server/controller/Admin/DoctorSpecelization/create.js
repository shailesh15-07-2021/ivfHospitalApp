const DoctorSpecelizationDB = require("../../../model/DoctorSpecelizationModel");

// Load input validations
const validateDoctorSpecelizationInput = require("../../../validation/DoctorSpecelizationValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDoctorSpecelizationInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const DoctorSpecelization = DoctorSpecelizationDB({
    name: req.body.name,
    image: req.body.image,
    type: req.body.type,
  });
  if (req.file) {
    DoctorSpecelization.image = "/public/image/" + req.file.filename;
  }

  DoctorSpecelization.save()
    .then((data) => {
      res.status(201).json({
        msg: "Doctor Specelization added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message ||
          "some error occured while creating Doctor Specelization",
      });
    });
};
