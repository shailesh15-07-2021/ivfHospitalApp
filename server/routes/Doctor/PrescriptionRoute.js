const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreatePrescription = require("../../controller/Doctor/Prescription/create");
const FindPrescription = require("../../controller/Doctor/Prescription/find");
const FindOnePrescription = require("../../controller/Doctor/Prescription/findOne");
const UpdatePrescription = require("../../controller/Doctor/Prescription/update");
const DeletePrescription = require("../../controller/Doctor/Prescription/delete");

router.post("/create", auth, CreatePrescription);
router.get("/find", auth, FindPrescription);
router.get("/find/:id", auth, FindOnePrescription);
router.put("/update/:id", auth, UpdatePrescription);
router.delete("/delete/:id", auth, DeletePrescription);

module.exports = router;
