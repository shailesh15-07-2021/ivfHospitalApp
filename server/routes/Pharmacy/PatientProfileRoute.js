const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPatient = require("../../controller/Pharmacy/PatientProfile/find");
const FindOnePatient = require("../../controller/Pharmacy/PatientProfile/findOne");

router.get("/find", auth, FindPatient);
router.get("/find/:id", auth, FindOnePatient);

module.exports = router;
