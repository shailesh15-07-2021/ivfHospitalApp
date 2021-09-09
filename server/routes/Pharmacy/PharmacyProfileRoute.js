const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreatePharmacy = require("../../controller/Pharmacy/PharmacyProfile/create");
const FindPharmacy = require("../../controller/Pharmacy/PharmacyProfile/find");
const FindOnePharmacy = require("../../controller/Pharmacy/PharmacyProfile/findOne");
const UpdatePharmacy = require("../../controller/Pharmacy/PharmacyProfile/update");
const DeletePharmacy = require("../../controller/Pharmacy/PharmacyProfile/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/Pharmacy"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("image"), CreatePharmacy);
router.get("/find", auth, FindPharmacy);
router.get("/find/:id", auth, FindOnePharmacy);
router.put("/update/:id", auth, UpdatePharmacy);
router.delete("/delete/:id", auth, upload.single("image"), DeletePharmacy);

module.exports = router;
