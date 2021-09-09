const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPatientPastPrescription = require("../../controller/Diagnose/PatientPastPrescription/find");
const FindOnePatientPastPrescription = require("../../controller/Diagnose/PatientPastPrescription/findOne");

router.get("/find", auth, FindPatientPastPrescription);
router.get("/find/:id", auth, FindOnePatientPastPrescription);

module.exports = router;
