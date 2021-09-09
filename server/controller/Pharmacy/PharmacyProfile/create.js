const PharmacyProfileDB = require("../../../model/PharmacyProfileModel");

// Load input validations
const validatePharmacyProfileInput = require("../../../validation/PharmacyProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyProfileInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const PharmacyProfile = PharmacyProfileDB({
    pharmacy: req.body.pharmacy,
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
    PharmacyProfile.image = "/public/image/" + req.file.filename;
  }

  PharmacyProfile.save()
    .then((data) => {
      res.status(201).json({
        msg: "Pharmacy Profile added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Pharmacy Profile",
      });
    });
};
