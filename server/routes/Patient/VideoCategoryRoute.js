const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindCategory = require("../../controller/Patient/vCategory/find");
const FindOneCategory = require("../../controller/Patient/vCategory/findOne");

router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);

module.exports = router;
