const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateSubCategory = require("../../controller/Diagnose/DiagnoseSubCategory/create");
const FindSubCategory = require("../../controller/Diagnose/DiagnoseSubCategory/find");
const FindOneSubCategory = require("../../controller/Diagnose/DiagnoseSubCategory/findOne");
const UpdateSubCategory = require("../../controller/Diagnose/DiagnoseSubCategory/update");
const DeleteSubCategory = require("../../controller/Diagnose/DiagnoseSubCategory/delete");

router.post("/create", auth, CreateSubCategory);
router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);
router.put("/update/:id", auth, UpdateSubCategory);
router.delete("/delete/:id", auth, DeleteSubCategory);

module.exports = router;
