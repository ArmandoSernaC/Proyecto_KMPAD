const router = require('express').Router();
const {sales_controller} = require("../controllers");
router.get("/list", sales_controller.getAllsales );
module.exports = router;