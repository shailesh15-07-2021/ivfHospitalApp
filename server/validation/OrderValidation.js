const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validatePatientInput(data) {
  let errors = {};

  data.userDetail = !isEmpty(data.userDetail) ? data.userDetail : "";
  data.product = !isEmpty(data.product) ? data.product : "";
  data.qty = !isEmpty(data.qty) ? data.qty : "";
  data.price = !isEmpty(data.price) ? data.price : "";
  data.taxPrice = !isEmpty(data.taxPrice) ? data.taxPrice : "";
  data.deliveryCharge = !isEmpty(data.deliveryCharge)
    ? data.deliveryCharge
    : "";
  data.totalAmount = !isEmpty(data.totalAmount) ? data.totalAmount : "";
  data.isPaid = !isEmpty(data.isPaid) ? data.isPaid : "";
  data.orderStatus = !isEmpty(data.orderStatus) ? data.orderStatus : "";

  if (Validator.isEmpty(data.userDetail)) {
    errors.userDetail = "userDetail field is required";
  }

  if (Validator.isEmpty(data.product)) {
    errors.product = "product detail is required";
  }

  if (Validator.isEmpty(data.qty)) {
    errors.qty = "qty  is required";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "product price  is required";
  }

  if (Validator.isEmpty(data.taxPrice)) {
    errors.taxPrice = "taxPrice is required";
  }

  if (Validator.isEmpty(data.deliveryCharge)) {
    errors.deliveryCharge = "delivery Charge is required";
  }

  if (Validator.isEmpty(data.totalAmount)) {
    errors.totalAmount = "total Amount is required";
  }

  if (Validator.isEmpty(data.isPaid)) {
    errors.isPaid = "payment status required";
  }

  if (Validator.isEmpty(data.orderStatus)) {
    errors.orderStatus = "order status required";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
