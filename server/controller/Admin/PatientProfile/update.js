const PatientDB = require("../../../model/PatientProfileModel");

// Load input validations
const validateCategoryInput = require("../../../validation/PatientProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PatientDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error whie finding Patient Details" });
      } else {
        res.status(200).json({
          msg: "Patient Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Patient Details update information" });
    });
};
