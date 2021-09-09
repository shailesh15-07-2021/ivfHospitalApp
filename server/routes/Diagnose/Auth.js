const express = require("express");
const router = express.Router();

const DiagnoseLogin = require("../../controller/Diagnose/Auth/login");
const DiagnoseRegister = require("../../controller/Diagnose/Auth/register");

router.post("/login", DiagnoseLogin);
router.post("/register", DiagnoseRegister);

module.exports = router;
