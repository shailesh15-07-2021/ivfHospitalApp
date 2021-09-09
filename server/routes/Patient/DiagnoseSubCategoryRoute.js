const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindSubCategory = require("../../controller/Patient/DiagnoseSubCategory/find");
const FindOneSubCategory = require("../../controller/Patient/DiagnoseSubCategory/findOne");

router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);

module.exports = router;
