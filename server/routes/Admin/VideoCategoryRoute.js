const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateCategory = require("../../controller/Admin/vCategory/create");
const FindCategory = require("../../controller/Admin/vCategory/find");
const FindOneCategory = require("../../controller/Admin/vCategory/findOne");
const UpdateCategory = require("../../controller/Admin/vCategory/update");
const DeleteCategory = require("../../controller/Admin/vCategory/delete");

router.post("/create", auth, CreateCategory);
router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);
router.put("/update/:id", auth, UpdateCategory);
router.delete("/delete/:id", auth, DeleteCategory);

module.exports = router;
