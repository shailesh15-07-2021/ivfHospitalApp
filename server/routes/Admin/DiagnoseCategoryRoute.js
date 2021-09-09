const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateCategory = require("../../controller/Admin/DiagnoseCategory/create");
const FindCategory = require("../../controller/Admin/DiagnoseCategory/find");
const FindOneCategory = require("../../controller/Admin/DiagnoseCategory/findOne");
const UpdateCategory = require("../../controller/Admin/DiagnoseCategory/update");
const DeleteCategory = require("../../controller/Admin/DiagnoseCategory/delete");

router.post("/create", auth, CreateCategory);
router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);
router.put("/update/:id", auth, UpdateCategory);
router.delete("/delete/:id", auth, DeleteCategory);

module.exports = router;
