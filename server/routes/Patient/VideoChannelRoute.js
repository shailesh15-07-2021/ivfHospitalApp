const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindChannel = require("../../controller/Patient/vChannel/find");
const FindOneChannel = require("../../controller/Patient/vChannel/findOne");

router.get("/find", auth, FindChannel);
router.get("/find/:id", auth, FindOneChannel);

module.exports = router;
