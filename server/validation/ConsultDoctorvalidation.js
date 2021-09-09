const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.purpose = !isEmpty(data.purpose) ? data.purpose : "";
  data.fee = !isEmpty(data.fee) ? data.fee : "";
  data.isPaid = !isEmpty(data.isPaid) ? data.isPaid : "";

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient Name is required";
  }

  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "doctor Name is required";
  }

  if (Validator.isEmpty(data.purpose)) {
    errors.purpose = "purpose for appointment is required";
  }

  if (Validator.isEmpty(data.fee)) {
    errors.fee = "fee is required";
  }

  if (Validator.isEmpty(data.isPaid)) {
    errors.isPaid = "Payment Status is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
