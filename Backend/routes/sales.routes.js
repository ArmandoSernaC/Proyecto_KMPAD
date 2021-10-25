const router = require('express').Router();
const {sales_controller} = require("../controllers");
const {sales_middlewares} = require("../middlewares");


router.get("/list", sales_controller.getAllsales );
router.post("/add",sales_middlewares.verifyTypes,sales_middlewares.verifyId,  sales_controller.addsale );

module.exports = router;