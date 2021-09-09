const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDiagnoseProductInput(data) {
  let errors = {};

  data.diagnose = !isEmpty(data.diagnose) ? data.diagnose : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.headline = !isEmpty(data.headline) ? data.headline : "";
  data.specification = !isEmpty(data.specification) ? data.specification : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.diagnose)) {
    errors.diagnose = "Diagnose field is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Diagnose category is required";
  }

  if (!Validator.isLength(data.name, { min: 3, max: 60 })) {
    errors.name = "Diagnose product name must be between 3 and 60 characters";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Diagnose product name field is required";
  }

  if (Validator.isEmpty(data.headline)) {
    errors.headline = "Diagnose product headline field is required";
  }

  if (Validator.isEmpty(data.specification)) {
    errors.specification = "Diagnose product specification is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Diagnose product price is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
