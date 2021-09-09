const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindSubCategory = require("../../controller/Doctor/DiagnoseSubCategory/find");
const FindOneSubCategory = require("../../controller/Doctor/DiagnoseSubCategory/findOne");

router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);

module.exports = router;
