const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindPatient = require("../../controller/Doctor/PatientProfile/find");
const FindOnePatient = require("../../controller/Doctor/PatientProfile/findOne");
const UpdatePatient = require("../../controller/Doctor/PatientProfile/update");

router.get("/find", auth, FindPatient);
router.get("/find/:id", auth, FindOnePatient);
router.put("/update/:id", auth, UpdatePatient);

module.exports = router;
