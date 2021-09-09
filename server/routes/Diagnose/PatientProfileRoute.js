const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPatient = require("../../controller/Diagnose/PatientProfile/find");
const FindOnePatient = require("../../controller/Diagnose/PatientProfile/findOne");

router.get("/find", auth, FindPatient);
router.get("/find/:id", auth, FindOnePatient);

module.exports = router;
