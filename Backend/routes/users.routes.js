const router = require('express').Router();
const {users_controller} = require("../controllers");
const {users_middlewares} = require("../middlewares");

router.get("/list", users_controller.getAllusers);
router.post("/add", users_middlewares.verifyTypes, users_middlewares.verifyEmail ,users_controller.adduser);

module.exports = router;