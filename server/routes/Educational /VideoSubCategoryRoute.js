const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateSubCategory = require("../../controller/Educational /vSubCategory/create");
const FindSubCategory = require("../../controller/Educational /vSubCategory/find");
const FindOneSubCategory = require("../../controller/Educational /vSubCategory/findOne");
const UpdateSubCategory = require("../../controller/Educational /vSubCategory/update");
const DeleteSubCategory = require("../../controller/Educational /vSubCategory/delete");

router.post("/create", auth, CreateSubCategory);
router.get("/find", auth, FindSubCategory);
router.get("/find/:id", auth, FindOneSubCategory);
router.put("/update/:id", auth, UpdateSubCategory);
router.delete("/delete/:id", auth, DeleteSubCategory);

module.exports = router;
