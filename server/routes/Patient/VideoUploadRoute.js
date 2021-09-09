const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindVideo = require("../../controller/Patient/VideoUpload/find");
const FindOneVideo = require("../../controller/Patient/VideoUpload/findOne");

router.get("/find", auth, FindVideo);
router.get("/find/:id", auth, FindOneVideo);

module.exports = router;
