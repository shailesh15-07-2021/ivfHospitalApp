const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateChannel = require("../../controller/Pharmacy/vChannel/create");
const FindChannel = require("../../controller/Pharmacy/vChannel/find");
const FindOneChannel = require("../../controller/Pharmacy/vChannel/findOne");
const UpdateChannel = require("../../controller/Pharmacy/vChannel/update");
const DeleteChannel = require("../../controller/Pharmacy/vChannel/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/Channel"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("image"), CreateChannel);
router.get("/find", auth, FindChannel);
router.get("/find/:id", auth, FindOneChannel);
router.put("/update/:id", auth, UpdateChannel);
router.delete("/delete/:id", auth, upload.single("image"), DeleteChannel);

module.exports = router;
