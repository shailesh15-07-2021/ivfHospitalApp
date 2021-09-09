const DiagnoseProductDB = require("../../../model/DiagnoseProductModel");

// Load input validations
const validatePatientInput = require("../../../validation/DiagnoseProductValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePatientInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const DiagnoseProduct = DiagnoseProductDB({
    diagnose: req.body.diagnose,
    category: req.body.category,
    name: req.body.name,
    headline: req.body.headline,
    desc: req.body.desc,
    specification: req.body.specification,
    requirments: req.body.requirments,
    mrp: req.body.mrp,
    price: req.body.price,
    productPictures: req.body.productPictures,
  });
  if (req.file) {
    DiagnoseProduct.productPictures = "/public/image/" + req.file.filename;
  }

  DiagnoseProduct.save()
    .then((data) => {
      res.status(201).json({
        msg: "Diagnose Product added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Diagnose Product",
      });
    });
};
