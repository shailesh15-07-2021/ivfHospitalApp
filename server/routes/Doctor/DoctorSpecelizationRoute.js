const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const FindDoctor = require("../../controller/Doctor/DoctorSpecelization/find");
const FindOneDoctor = require("../../controller/Doctor/DoctorSpecelization/findOne");

router.get("/find", auth, FindDoctor);
router.get("/find/:id", auth, FindOneDoctor);

module.exports = router;
