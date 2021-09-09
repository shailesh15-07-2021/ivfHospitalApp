const express = require("express");
const router = express.Router();

router.use("/authentication", require("./Auth"));

router.use("/video-category", require("./VideoCategoryRoute"));

router.use("/video-channel", require("./VideoChannelRoute"));

router.use("/video-sub-category", require("./VideoSubCategoryRoute"));

router.use("/video-upload", require("./VideoUploadRoute"));

module.exports = router;
