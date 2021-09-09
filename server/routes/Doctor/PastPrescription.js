const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPatientPastPrescription = require("../../controller/Doctor/PatientPastPrescription/find");
const FindOnePatientPastPrescription = require("../../controller/Doctor/PatientPastPrescription/findOne");

router.get("/find", auth, FindPatientPastPrescription);
router.get("/find/:id", auth, FindOnePatientPastPrescription);

module.exports = router;
