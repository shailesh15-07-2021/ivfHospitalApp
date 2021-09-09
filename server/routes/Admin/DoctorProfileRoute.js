const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateDoctor = require("../../controller/Admin/DoctorProfile/create");
const FindDoctor = require("../../controller/Admin/DoctorProfile/find");
const FindOneDoctor = require("../../controller/Admin/DoctorProfile/findOne");
const UpdateDoctor = require("../../controller/Admin/DoctorProfile/update");
const DeleteDoctor = require("../../controller/Admin/DoctorProfile/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/doctor"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("image"), CreateDoctor);
router.get("/find", auth, FindDoctor);
router.get("/find/:id", auth, FindOneDoctor);
router.put("/update/:id", auth, UpdateDoctor);
router.delete("/delete/:id", auth, upload.single("image"), DeleteDoctor);

module.exports = router;
