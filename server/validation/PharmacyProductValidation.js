const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePharmacyProductInput(data) {
  let errors = {};

  data.pharmacy = !isEmpty(data.patient) ? data.patient : "";
  data.prescription = !isEmpty(data.prescription) ? data.prescription : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.specification = !isEmpty(data.specification) ? data.specification : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient field is required";
  }

  if (Validator.isEmpty(data.prescription)) {
    errors.prescription = "prescription field is required";
  }

  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "doctor field is required";
  }

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient field is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "name field is required";
  }

  if (Validator.isEmpty(data.specification)) {
    errors.specification = "specification field is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "price field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
