const DoctorSpecelizationDB = require("../../../model/DoctorSpecelizationModel");

// Load input validations
const validateDoctorSpecelizationInput = require("../../../validation/DoctorSpecelizationValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDoctorSpecelizationInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  DoctorSpecelizationDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Doctor Specelization Details",
        });
      } else {
        res.status(200).json({
          msg: "DoctorS pecelization Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Patient Past Prescription Details update information",
      });
    });
};
