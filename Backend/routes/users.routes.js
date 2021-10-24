const router = require('express').Router();
const {users_controller} = require("../controllers");
router.get("/list", users_controller.getAllusers);

module.exports = router;