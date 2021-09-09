const express = require("express");
const router = express.Router();

const PharmacyLogin = require("../../controller/Pharmacy/Auth/login");
const PharmacyRegister = require("../../controller/Pharmacy/Auth/register");

router.post("/login", PharmacyLogin);
router.post("/register", PharmacyRegister);

module.exports = router;
