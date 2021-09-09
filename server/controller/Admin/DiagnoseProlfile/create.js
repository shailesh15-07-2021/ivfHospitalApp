const DiagnoseDB = require("../../../model/DiagnoseProfileModel");

// Load input validations
const validateDiagnoseInput = require("../../../validation/DiagnoseProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDiagnoseInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Diagnose = DiagnoseDB({
    diagnose: req.body.diagnose,
    address: req.body.address,
    image: req.body.image,
  });
  if (req.file) {
    DoctorSpecelization.image = "/public/image/" + req.file.filename;
  }

  Diagnose.save()
    .then((data) => {
      res.status(201).json({
        msg: "Diagnose added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Diagnose",
      });
    });
};
