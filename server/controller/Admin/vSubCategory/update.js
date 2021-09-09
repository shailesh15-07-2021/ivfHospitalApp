const SubCategoryDB = require("../../../model/SubCategoryModel");

// Load input validations
const validateSubCategoryInput = require("../../../validation/E-learning/SubCategoryValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateSubCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  const id = req.params.id;
  SubCategoryDB.findByIdAndUpdate(id, req.body, {
    upsert: true,
    new: true,
  })
    .then((data) => {
      if (!data) {
        res.status(400).send({
          message: "error whie finding SubCategory Details",
        });
      } else {
        res.status(200).json({
          msg: "SubCategory Updated successfully",
          data: data,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "error SubCategory Details update information",
      });
    });
};
