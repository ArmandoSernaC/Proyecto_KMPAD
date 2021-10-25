const router = require('express').Router();
const {sales_controller} = require("../controllers");

router.get("/list", sales_controller.getAllsales );
router.post("/add", sales_controller.addsale );

module.exports = router;