const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPharmacyProduct = require("../../controller/Patient/PharmacyProduct/find");
const FindOnePharmacyProduct = require("../../controller/Patient/PharmacyProduct/findOne");

router.get("/find", auth, FindPharmacyProduct);
router.get("/find/:id", auth, FindOnePharmacyProduct);

module.exports = router;
