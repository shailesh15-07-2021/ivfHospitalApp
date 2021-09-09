const PastPrescriptionDB = require("../../../model/PastPrescriptionModel");

// Load input validations
const validatePatientInput = require("../../../validation/PastPrescriptionValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePatientInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const PastPrescription = PastPrescriptionDB({
    patient: req.body.patient,
    doctor: req.body.doctor,
    doctorName: req.body.doctorName,
    address: req.body.address,
    treatmentDetails: req.body.treatmentDetails,
    priviousMedicine: req.body.priviousMedicine,
    medicalPastPrescriptions: req.body.medicalPastPrescriptions,
    treatmentStart: req.body.treatmentStart,
    treatmentEnd: req.body.treatmentEnd,
  });

  PastPrescription.save()
    .then((data) => {
      res.status(201).json({
        msg: "Patient Past Prescription added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message ||
          "some error occured while creating Patient Past Prescription",
      });
    });
};
