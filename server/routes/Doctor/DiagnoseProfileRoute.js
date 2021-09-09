const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindDiagnose = require("../../controller/Doctor/DiagnoseProlfile/find");
const FindOneDiagnose = require("../../controller/Doctor/DiagnoseProlfile/findOne");

router.get("/find", auth, FindDiagnose);
router.get("/find/:id", auth, FindOneDiagnose);

module.exports = router;
