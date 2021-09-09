const PatientDB = require("../../../model/PatientProfileModel");

// Load input validations
const validatePatientInput = require("../../../validation/PatientProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePatientInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Patient = PatientDB({
    patient: req.body.patient,
    medicalHistory: req.body.medicalHistory,
    age: req.body.age,
    gender: req.body.gender,
    height: req.body.height,
    weight: req.body.weight,
    address: req.body.address,
    landmark: req.body.landmark,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    image: req.body.image,
  });
  if (req.file) {
    Patient.image = "/public/image/" + req.file.filename;
  }

  Patient.save()
    .then((data) => {
      res.status(201).json({
        msg: "Patient Profile added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Patient Profile",
      });
    });
};
