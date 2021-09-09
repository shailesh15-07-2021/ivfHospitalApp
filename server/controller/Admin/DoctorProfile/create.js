const DoctorDB = require("../../../model/DoctorProfileModel");

// Load input validations
const validateDoctorInput = require("../../../validation/DoctorProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDoctorInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Doctor = DoctorDB({
    specelization: req.body.specelization,
    doctor: req.body.doctor,
    speciality: req.body.speciality,
    experience: req.body.experience,
    desc: req.body.desc,
    Address: req.body.Address,
    landmark: req.body.landmark,
    city: req.body.city,
    state: req.body.state,
    pincode: req.body.pincode,
    image: req.body.image,
  });
  if (req.file) {
    Doctor.image = "/public/image/" + req.file.filename;
  }

  Doctor.save()
    .then((data) => {
      res.status(201).json({
        msg: "Doctor added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Doctor Profile ",
      });
    });
};
