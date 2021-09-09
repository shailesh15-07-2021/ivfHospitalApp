const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDoctorSpecelizationInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";

  if (!Validator.isLength(data.name, { min: 3, max: 60 })) {
    errors.name = "Diagnose product name must be between 3 and 60 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Diagnose product name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
