const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreatePatientPastPrescription = require("../../controller/Admin/PatientPastPrescription/create");
const FindPatientPastPrescription = require("../../controller/Admin/PatientPastPrescription/find");
const FindOnePatientPastPrescription = require("../../controller/Admin/PatientPastPrescription/findOne");
const UpdatePatientPastPrescription = require("../../controller/Admin/PatientPastPrescription/update");
const DeletePatientPastPrescription = require("../../controller/Admin/PatientPastPrescription/delete");

router.post("/create", auth, CreatePatientPastPrescription);
router.get("/find", auth, FindPatientPastPrescription);
router.get("/find/:id", auth, FindOnePatientPastPrescription);
router.put("/update/:id", auth, UpdatePatientPastPrescription);
router.delete("/delete/:id", auth, DeletePatientPastPrescription);

module.exports = router;
