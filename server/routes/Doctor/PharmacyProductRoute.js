const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPharmacyProduct = require("../../controller/Doctor/PharmacyProduct/find");
const FindOnePharmacyProduct = require("../../controller/Doctor/PharmacyProduct/findOne");

router.get("/find", auth, FindPharmacyProduct);
router.get("/find/:id", auth, FindOnePharmacyProduct);

module.exports = router;
