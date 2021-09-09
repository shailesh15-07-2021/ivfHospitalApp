const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreatePrescription = require("../../controller/Admin/Prescription/create");
const FindPrescription = require("../../controller/Admin/Prescription/find");
const FindOnePrescription = require("../../controller/Admin/Prescription/findOne");
const UpdatePrescription = require("../../controller/Admin/Prescription/update");
const DeletePrescription = require("../../controller/Admin/Prescription/delete");

router.post("/create", auth, CreatePrescription);
router.get("/find", auth, FindPrescription);
router.get("/find/:id", auth, FindOnePrescription);
router.put("/update/:id", auth, UpdatePrescription);
router.delete("/delete/:id", auth, DeletePrescription);

module.exports = router;
