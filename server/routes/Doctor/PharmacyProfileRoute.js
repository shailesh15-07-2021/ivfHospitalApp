const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPharmacy = require("../../controller/Doctor/PharmacyProfile/find");
const FindOnePharmacy = require("../../controller/Doctor/PharmacyProfile/findOne");

router.get("/find", auth, FindPharmacy);
router.get("/find/:id", auth, FindOnePharmacy);

module.exports = router;
