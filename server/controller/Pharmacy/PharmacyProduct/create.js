const PharmacyProductDB = require("../../../model/PharmacyProducts");

// Load input validations
const validatePharmacyProductInput = require("../../../validation/PharmacyProductValidation");

module.exports = (req, res, next) => {
  const { errors, isValid } = validatePharmacyProductInput(req.body);

  // Check Validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const PharmacyProduct = PharmacyProductDB({
    pharmacy: req.body.pharmacy,
    prescription: req.body.prescription,
    doctor: req.body.doctor,
    patient: req.body.patient,
    name: req.body.name,
    desc: req.body.desc,
    specification: req.body.specification,
    precausions: req.body.precausions,
    productFor: req.body.productFor,
    mrp: req.body.mrp,
    price: req.body.price,
    type: req.body.type,
    productPictures: req.body.type,
  });
  if (req.file) {
    PharmacyProduct.productPictures = "/public/image/" + req.file.filename;
  }

  PharmacyProduct.save()
    .then((data) => {
      res.status(201).json({
        msg: "Pharmacy Product added Sucessfully",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        mesaage:
          err.message || "some error occured while creating Pharmacy Product",
      });
    });
};
