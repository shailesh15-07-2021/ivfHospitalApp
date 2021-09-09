const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindSubCategory = require("../../controller/Pharmacy/vSubCategory/find");
const FindOneSubCategory = require("../../controller/Pharmacy/vSubCategory/findOne");

router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);

module.exports = router;
