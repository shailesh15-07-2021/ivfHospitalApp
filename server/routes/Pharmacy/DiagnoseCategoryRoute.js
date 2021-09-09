const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindCategory = require("../../controller/Pharmacy/DiagnoseCategory/find");
const FindOneCategory = require("../../controller/Pharmacy/DiagnoseCategory/findOne");

router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);

module.exports = router;
