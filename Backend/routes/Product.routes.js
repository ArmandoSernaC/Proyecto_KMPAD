const router = require('express').Router();
const {product_controller} = require("../controllers");
router.get("/list", product_controller.getAllproducts );
module.exports = router;