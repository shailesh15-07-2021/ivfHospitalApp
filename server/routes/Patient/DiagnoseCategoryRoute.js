const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindCategory = require("../../controller/Patient/DiagnoseCategory/find");
const FindOneCategory = require("../../controller/Patient/DiagnoseCategory/findOne");

router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);

module.exports = router;
