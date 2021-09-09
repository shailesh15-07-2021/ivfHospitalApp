const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateSubCategory = require("../../controller/Admin/DiagnoseSubCategory/create");
const FindSubCategory = require("../../controller/Admin/DiagnoseSubCategory/find");
const FindOneSubCategory = require("../../controller/Admin/DiagnoseSubCategory/findOne");
const UpdateSubCategory = require("../../controller/Admin/DiagnoseSubCategory/update");
const DeleteSubCategory = require("../../controller/Admin/DiagnoseSubCategory/delete");

router.post("/create", auth, CreateSubCategory);
router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);
router.put("/update/:id", auth, UpdateSubCategory);
router.delete("/delete/:id", auth, DeleteSubCategory);

module.exports = router;
