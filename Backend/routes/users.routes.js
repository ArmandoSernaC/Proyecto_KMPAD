const router = require('express').Router();
const {users_controller} = require("../controllers");

router.get("/list", users_controller.getAllusers);
router.post("/add", users_controller.adduser);

module.exports = router;