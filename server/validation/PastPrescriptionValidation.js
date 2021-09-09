const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePatientInput(data) {
  let errors = {};

  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient field is required";
  }

  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "doctor field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
