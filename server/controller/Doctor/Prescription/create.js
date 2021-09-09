const PrescriptionDB = require("../../../model/PrescriptionModel");

// Load input validations
const validatePrescriptionInput = require("../../../validation/PrescriptionValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePrescriptionInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Prescription = PrescriptionDB({
    patient: req.body.patient,
    doctor: req.body.doctor,
    name: req.body.name,
    noOfTimeToTakeMedicinePerday: req.body.noOfTimeToTakeMedicinePerday,
    medicineQuntityPerDose: req.body.medicineQuntityPerDose,
    timeDuration: req.body.timeDuration,
    additionalCare: req.body.additionalCare,
  });

  Prescription.save()
    .then((data) => {
      res.status(201).json({
        msg: "Diagnose Product added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Diagnose Product",
      });
    });
};
