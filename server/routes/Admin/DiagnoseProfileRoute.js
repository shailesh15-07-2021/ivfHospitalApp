const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateDiagnose = require("../../controller/Admin/DiagnoseProlfile/create");
const FindDiagnose = require("../../controller/Admin/DiagnoseProlfile/find");
const FindOneDiagnose = require("../../controller/Admin/DiagnoseProlfile/findOne");
const UpdateDiagnose = require("../../controller/Admin/DiagnoseProlfile/update");
const DeleteDiagnose = require("../../controller/Admin/DiagnoseProlfile/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/Diagnose"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("image"), CreateDiagnose);
router.get("/find", auth, FindDiagnose);
router.get("/find/:id", auth, FindOneDiagnose);
router.put("/update/:id", auth, UpdateDiagnose);
router.delete("/delete/:id", auth, upload.single("image"), DeleteDiagnose);

module.exports = router;
