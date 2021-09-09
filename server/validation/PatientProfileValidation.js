const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePharmacyProductInput(data) {
  let errors = {};

  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.age = !isEmpty(data.age) ? data.age : "";
  data.gender = !isEmpty(data.gender) ? data.gender : "";
  data.address = !isEmpty(data.address) ? data.address : "";

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient field is required";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "age field is required";
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = "gender is required";
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = "address is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
