const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPrescription = require("../../controller/Pharmacy/Prescription/find");
const FindOnePrescription = require("../../controller/Pharmacy/Prescription/findOne");

router.get("/find", auth, FindPrescription);
router.get("/find/:id", auth, FindOnePrescription);

module.exports = router;
