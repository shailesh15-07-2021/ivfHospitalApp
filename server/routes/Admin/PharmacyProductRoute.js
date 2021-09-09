const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreatePharmacyProduct = require("../../controller/Admin/PharmacyProduct/create");
const FindPharmacyProduct = require("../../controller/Admin/PharmacyProduct/find");
const FindOnePharmacyProduct = require("../../controller/Admin/PharmacyProduct/findOne");
const UpdatePharmacyProduct = require("../../controller/Admin/PharmacyProduct/update");
const DeletePharmacyProduct = require("../../controller/Admin/PharmacyProduct/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/PharmacyProduct"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("productPictures"), CreatePharmacyProduct);
router.get("/find", auth, FindPharmacyProduct);
router.get("/find/:id", auth, FindOnePharmacyProduct);
router.put("/update/:id", auth, UpdatePharmacyProduct);
router.delete(
  "/delete/:id",
  auth,
  upload.single("productPictures"),
  DeletePharmacyProduct
);

module.exports = router;
