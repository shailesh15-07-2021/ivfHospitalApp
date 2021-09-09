const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateDiagnose = require("../../controller/Diagnose/DiagnoseProduct/create");
const FindDiagnose = require("../../controller/Diagnose/DiagnoseProduct/find");
const FindOneDiagnose = require("../../controller/Diagnose/DiagnoseProduct/findOne");
const UpdateDiagnose = require("../../controller/Diagnose/DiagnoseProduct/update");
const DeleteDiagnose = require("../../controller/Diagnose/DiagnoseProduct/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/Diagnose"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("productPictures"), CreateDiagnose);
router.get("/find", auth, FindDiagnose);
router.get("/find/:id", auth, FindOneDiagnose);
router.put("/update/:id", auth, UpdateDiagnose);
router.delete(
  "/delete/:id",
  auth,
  upload.single("productPictures"),
  DeleteDiagnose
);

module.exports = router;
