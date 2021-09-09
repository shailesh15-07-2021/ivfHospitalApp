const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePharmacyProductInput(data) {
  let errors = {};

  data.specelization = !isEmpty(data.specelization) ? data.specelization : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.speciality = !isEmpty(data.speciality) ? data.speciality : "";
  data.experience = !isEmpty(data.experience) ? data.experience : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";

  if (Validator.isEmpty(data.specelization)) {
    errors.specelization = "specelization field is required";
  }

  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "doctor field is required";
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
