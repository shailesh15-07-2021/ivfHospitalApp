const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePharmacyProductInput(data) {
  let errors = {};

  data.pharmacy = !isEmpty(data.pharmacy) ? data.pharmacy : "";
  data.speciality = !isEmpty(data.speciality) ? data.speciality : "";
  data.experience = !isEmpty(data.experience) ? data.experience : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";
  data.Address = !isEmpty(data.Address) ? data.Address : "";

  if (Validator.isEmpty(data.pharmacy)) {
    errors.pharmacy = "pharmacy name is required";
  }

  if (Validator.isEmpty(data.Address)) {
    errors.Address = "Address is required";
  }

  if (Validator.isEmpty(data.speciality)) {
    errors.speciality = "speciality field is required";
  }

  if (Validator.isEmpty(data.experience)) {
    errors.experience = "experience field is required";
  }

  if (Validator.isEmpty(data.desc)) {
    errors.desc = "Practice Description field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
