const PharmacyProductDB = require("../../../model/PharmacyProducts");

// Load input validations
const validatePharmacyProductInput = require("../../../validation/PharmacyProductValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyProductInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PharmacyProductDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Pharmacy Product Details",
        });
      } else {
        res.status(200).json({
          msg: "Pharmacy Product Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Pharmacy Product Details update information",
      });
    });
};
