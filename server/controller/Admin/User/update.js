const PharmacyDB = require("../../../model/UserModel");

// Load input validations
const validatePharmacyInput = require("../../../validation/UpdateUserValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  PharmacyDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res
          .status(400)
          .send({ message: "error whie fetching Pharmacy Details" });
      } else {
        res.status(200).json({
          msg: "Pharmacy Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error while update the  Pharmacy Details." });
    });
};
