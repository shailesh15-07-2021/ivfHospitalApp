const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreatePatientPastPrescription = require("../../controller/Patient/PatientPastPrescription/create");
const FindPatientPastPrescription = require("../../controller/Patient/PatientPastPrescription/find");
const FindOnePatientPastPrescription = require("../../controller/Patient/PatientPastPrescription/findOne");
const UpdatePatientPastPrescription = require("../../controller/Patient/PatientPastPrescription/update");
const DeletePatientPastPrescription = require("../../controller/Patient/PatientPastPrescription/delete");

router.post("/create", auth, CreatePatientPastPrescription);
router.get("/find", auth, FindPatientPastPrescription);
router.get("/find/:id", auth, FindOnePatientPastPrescription);
router.put("/update/:id", auth, UpdatePatientPastPrescription);
router.delete("/delete/:id", auth, DeletePatientPastPrescription);

module.exports = router;
