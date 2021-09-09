const CategoryDB = require("../../../model/DiagnosticCategoryModel");
const slugify = require("slugify");
const shortId = require("shortid");

// Load input validations
const validateCategoryInput = require("../../../validation/DiagnoseCategoryValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Category = CategoryDB({
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortId.generate()}`,
    type: req.body.type,
  });

  Category.save()
    .then((data) => {
      res.status(201).json({
        msg: "Category added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating Category",
      });
    });
};
