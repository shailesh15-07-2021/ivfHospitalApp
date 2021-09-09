const DoctorDB = require("../../../model/DoctorProfileModel");

// Load input validations
const validateDoctorInput = require("../../../validation/DoctorProfileValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateDoctorInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  DoctorDB.findByIdAndUpdate(id, req.body, { upsert: true, new: true })
    .then((data) => {
      if (!data) {
        res.status(400).send({ message: "error whie finding Doctor Details" });
      } else {
        res.status(200).json({
          msg: "Doctor Details Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res
        .status(500)
        .send({ message: "error Doctor Details update information" });
    });
};
