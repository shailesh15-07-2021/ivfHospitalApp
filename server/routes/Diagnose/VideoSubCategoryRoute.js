const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindSubCategory = require("../../controller/Diagnose/vSubCategory/find");
const FindOneSubCategory = require("../../controller/Diagnose/vSubCategory/findOne");

router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);

module.exports = router;
