const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreatePatient = require("../../controller/Patient/PatientProfile/create");
const FindPatient = require("../../controller/Patient/PatientProfile/find");
const FindOnePatient = require("../../controller/Patient/PatientProfile/findOne");
const UpdatePatient = require("../../controller/Patient/PatientProfile/update");
const DeletePatient = require("../../controller/Patient/PatientProfile/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/patient"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("image"), CreatePatient);
router.get("/find", auth, FindPatient);
router.get("/find/:id", auth, FindOnePatient);
router.put("/update/:id", auth, UpdatePatient);
router.delete("/delete/:id", auth, upload.single("image"), DeletePatient);

module.exports = router;
