const express = require("express");
const router = express.Router();
const shortId = require("shortid");
const path = require("path");
const multer = require("multer");

const auth = require("../../middleware/index");

const CreateVideo = require("../../controller/Admin/VideoUpload/create");
const FindVideo = require("../../controller/Admin/VideoUpload/find");
const FindOneVideo = require("../../controller/Admin/VideoUpload/findOne");
const UpdateVideo = require("../../controller/Admin/VideoUpload/update");
const DeleteVideo = require("../../controller/Admin/VideoUpload/delete");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads/VideoUrl"));
  },
  filename: function (req, file, cb) {
    cb(null, shortId.generate() + "_" + file.originalname);
  },
});
const upload = multer({ storage });

router.post("/create", auth, upload.single("VideoUrl"), CreateVideo);
router.get("/find", auth, FindVideo);
router.get("/find/:id", auth, FindOneVideo);
router.put("/update/:id", auth, upload.single("VideoUrl"), UpdateVideo);
router.delete("/delete/:id", auth, DeleteVideo);

module.exports = router;
