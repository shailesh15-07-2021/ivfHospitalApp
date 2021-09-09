const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDiagnoseInput(data) {
  let errors = {};

  data.diagnose = !isEmpty(data.diagnose) ? data.diagnose : "";

  if (Validator.isEmpty(data.diagnose)) {
    errors.diagnose = "Diagnose name field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
