const SubCategoryDB = require("../../../model/SubCategoryModel");
const slugify = require("slugify");
const shortId = require("shortid");

// Load input validations
const validateSubCategoryInput = require("../../../validation/E-learning/SubCategoryValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validateSubCategoryInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const SubCategory = SubCategoryDB({
    parentCategory: req.body.parentCategory,
    name: req.body.name,
    slug: `${slugify(req.body.name)}-${shortId.generate()}`,
    type: req.body.type,
  });

  SubCategory.save()
    .then((data) => {
      res.status(201).json({
        msg: "SubCategory added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage: err.message || "some error occured while creating SubCategory",
      });
    });
};
