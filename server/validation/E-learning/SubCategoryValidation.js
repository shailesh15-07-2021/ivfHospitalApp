const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.parentCategory = !isEmpty(data.parentCategory)
    ? data.parentCategory
    : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Category Name is required";
  }
  if (Validator.isEmpty(data.parentCategory)) {
    errors.parentCategory = "Parent Category Name is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
