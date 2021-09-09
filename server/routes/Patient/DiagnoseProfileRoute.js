const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindDiagnose = require("../../controller/Patient/DiagnoseProlfile/find");
const FindOneDiagnose = require("../../controller/Patient/DiagnoseProlfile/findOne");

router.get("/find", auth, FindDiagnose);
router.get("/find/:id", auth, FindOneDiagnose);

module.exports = router;
