const express = require("express");
const router = express.Router();

const PatientLogin = require("../../controller/Patient/Auth/login");
const PatientRegister = require("../../controller/Patient/Auth/register");

router.post("/login", PatientLogin);
router.post("/register", PatientRegister);

module.exports = router;
