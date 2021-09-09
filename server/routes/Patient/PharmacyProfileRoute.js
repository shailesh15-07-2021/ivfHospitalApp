const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPharmacy = require("../../controller/Patient/PharmacyProfile/find");
const FindOnePharmacy = require("../../controller/Patient/PharmacyProfile/findOne");

router.get("/find", auth, FindPharmacy);
router.get("/find/:id", auth, FindOnePharmacy);

module.exports = router;
