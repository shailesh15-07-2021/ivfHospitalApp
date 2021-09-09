const express = require("express");
const router = express.Router();

const auth = require("../../middleware/index");

const CreateUser = require("../../controller/Admin/User/create");
const FindUser = require("../../controller/Admin/User/find");
const FindOneUser = require("../../controller/Admin/User/findOne");
const UpdateUser = require("../../controller/Admin/User/update");
const DeleteUser = require("../../controller/Admin/User/delete");

router.post("/create", auth, CreateUser);
router.get("/find", auth, FindUser);
router.get("/find/:id", auth, FindOneUser);
router.put("/update/:id", auth, UpdateUser);
router.delete("/delete/:id", auth, DeleteUser);

module.exports = router;
