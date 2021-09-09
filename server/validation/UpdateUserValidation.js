const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePharmacyInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.contact = !isEmpty(data.contact) ? data.contact : "";
  data.role = !isEmpty(data.role) ? data.role : "";

  if (!Validator.isLength(data.name, { min: 3, max: 30 })) {
    errors.name = "Diagnose name must be between 3 and 30 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Diagnose name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.contact)) {
    errors.contact = "Contact Number is required";
  }

  if (Validator.isEmpty(data.role)) {
    errors.role = "Role is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
