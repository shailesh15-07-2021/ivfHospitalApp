const Validator = require("validator");
const isEmpty = require("../is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.user = !isEmpty(data.user) ? data.user : "";
  data.category = !isEmpty(data.category) ? data.category : "";
  data.channel = !isEmpty(data.channel) ? data.channel : "";
  data.name = !isEmpty(data.name) ? data.name : "";
  data.desc = !isEmpty(data.desc) ? data.desc : "";
  data.status = !isEmpty(data.status) ? data.status : "";

  if (Validator.isEmpty(data.user)) {
    errors.user = "user is required";
  }

  if (Validator.isEmpty(data.category)) {
    errors.category = "Category Name is required";
  }

  if (Validator.isEmpty(data.channel)) {
    errors.channel = "channel Name is required";
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = "Video Name is required";
  }

  if (Validator.isEmpty(data.desc)) {
    errors.desc = "Video Description is required";
  }

  if (Validator.isEmpty(data.status)) {
    errors.status = "Video status is required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
