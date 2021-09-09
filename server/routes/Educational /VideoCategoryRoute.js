const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateCategory = require("../../controller/Educational /vCategory/create");
const FindCategory = require("../../controller/Educational /vCategory/find");
const FindOneCategory = require("../../controller/Educational /vCategory/findOne");
const UpdateCategory = require("../../controller/Educational /vCategory/update");
const DeleteCategory = require("../../controller/Educational /vCategory/delete");

router.post("/create", auth, CreateCategory);
router.get("/find", auth, FindCategory);
router.get("/find/:id", auth, FindOneCategory);
router.put("/update/:id", auth, UpdateCategory);
router.delete("/delete/:id", auth, DeleteCategory);

module.exports = router;
