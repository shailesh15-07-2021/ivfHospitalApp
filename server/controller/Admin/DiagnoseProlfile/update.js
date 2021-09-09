const DiagnoseDB = require("../../../model/DiagnoseProfileModel");

// Load input validations
const validateDiagnoseInput = require("../../../validation/DiagnoseProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDiagnoseInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  DiagnoseDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie finding Diagnose Details" });
      } else {
        res.status(200).json({
          msg: "Diagnose Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Diagnose Details update information" });
    });
};
