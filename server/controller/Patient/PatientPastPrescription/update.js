const PastPrescriptionDB = require("../../../model/PastPrescriptionModel");

// Load input validations
const validatePastPrescriptionInput = require("../../../validation/PastPrescriptionValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePastPrescriptionInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PastPrescriptionDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({
            message: "error whie finding Patient Past Prescription Details",
          });
      } else {
        res.status(200).json({
          msg: "Patient Past Prescription Details Updated successfully",
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
