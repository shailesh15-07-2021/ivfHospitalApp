const express = require("express");
const router = express.Router();

const adminLogin = require("../../controller/Admin/Auth/login");
const adminRegister = require("../../controller/Admin/Auth/register");

router.post("/login", adminLogin);
router.post("/register", adminRegister);

module.exports = router;
