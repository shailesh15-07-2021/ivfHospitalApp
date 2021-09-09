const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateDoctor = require("../../controller/Admin/DoctorSpecelization/create");
const FindDoctor = require("../../controller/Admin/DoctorSpecelization/find");
const FindOneDoctor = require("../../controller/Admin/DoctorSpecelization/findOne");
const UpdateDoctor = require("../../controller/Admin/DoctorSpecelization/update");
const DeleteDoctor = require("../../controller/Admin/DoctorSpecelization/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/DoctorSpecelization"));
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
