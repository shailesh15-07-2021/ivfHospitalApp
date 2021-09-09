const PharmacyProfileDB = require("../../../model/PharmacyProfileModel");

// Load input validations
const validatePharmacyProfileInput = require("../../../validation/PharmacyProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyProfileInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PharmacyProfileDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error whie finding Pharmacy Profile Details" });
      } else {
        res.status(200).json({
          msg: "Pharmacy Profile Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Pharmacy Profile Details update information" });
    });
};
