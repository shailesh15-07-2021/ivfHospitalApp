const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateCategory = require("../../controller/Diagnose/DiagnoseCategory/create");
const FindCategory = require("../../controller/Diagnose/DiagnoseCategory/find");
const FindOneCategory = require("../../controller/Diagnose/DiagnoseCategory/findOne");
const UpdateCategory = require("../../controller/Diagnose/DiagnoseCategory/update");
const DeleteCategory = require("../../controller/Diagnose/DiagnoseCategory/delete");

router.post("/create", auth, CreateCategory);
router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);
router.put("/update/:id", auth, UpdateCategory);
router.delete("/delete/:id", auth, DeleteCategory);

module.exports = router;
