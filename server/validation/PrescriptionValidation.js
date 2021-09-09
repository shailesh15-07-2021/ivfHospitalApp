const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePatientInput(data) {
  let errors = {};

  data.patient = !isEmpty(data.patient) ? data.patient : "";
  data.doctor = !isEmpty(data.doctor) ? data.doctor : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.timeDuration = !isEmpty(data.timeDuration) ? data.timeDuration : "";
  data.noOfTimeToTakeMedicinePerday = !isEmpty(
    data.noOfTimeToTakeMedicinePerday
  )
    ? data.noOfTimeToTakeMedicinePerday
    : "";

  if (Validator.isEmpty(data.patient)) {
    errors.patient = "patient field is required";
  }

  if (Validator.isEmpty(data.doctor)) {
    errors.doctor = "doctor field is required";
  }

  if (Validator.isEmpty(data.timeDuration)) {
    errors.timeDuration = "time Duration field is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Medicine name is required";
  }

  if (Validator.isEmpty(data.noOfTimeToTakeMedicinePerday)) {
    errors.noOfTimeToTakeMedicinePerday =
      "no Of Time To Take Medicine Per day field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
