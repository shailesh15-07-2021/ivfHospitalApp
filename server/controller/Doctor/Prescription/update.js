const PrescriptionDB = require("../../../model/PrescriptionModel");

// Load input validations
const validatePrescriptionInput = require("../../../validation/PrescriptionValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePrescriptionInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PrescriptionDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Prescription",
        });
      } else {
        res.status(200).json({
          msg: "Prescription Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Prescription Details update information",
      });
    });
};
