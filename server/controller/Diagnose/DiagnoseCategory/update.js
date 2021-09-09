const CategoryDB = require("../../../model/DiagnosticCategoryModel");

// Load input validations
const validateCategoryInput = require("../../../validation/DiagnoseCategoryValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  CategoryDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding Category Details",
        });
      } else {
        res.status(200).json({
          msg: "Category Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error Category Details update information",
      });
    });
};
