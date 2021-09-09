const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPharmacyProduct = require("../../controller/Diagnose/PharmacyProduct/find");
const FindOnePharmacyProduct = require("../../controller/Diagnose/PharmacyProduct/findOne");

router.get("/find", auth, FindPharmacyProduct);
router.get("/find/:id", auth, FindOnePharmacyProduct);

module.exports = router;
