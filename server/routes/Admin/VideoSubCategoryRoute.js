const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateSubCategory = require("../../controller/Admin/vSubCategory/create");
const FindSubCategory = require("../../controller/Admin/vSubCategory/find");
const FindOneSubCategory = require("../../controller/Admin/vSubCategory/findOne");
const UpdateSubCategory = require("../../controller/Admin/vSubCategory/update");
const DeleteSubCategory = require("../../controller/Admin/vSubCategory/delete");

router.post("/create", auth, CreateSubCategory);
router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);
router.put("/update/:id", auth, UpdateSubCategory);
router.delete("/delete/:id", auth, DeleteSubCategory);

module.exports = router;
