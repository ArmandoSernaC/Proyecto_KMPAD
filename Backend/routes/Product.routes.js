const router = require('express').Router();
const {product_controller} = require("../controllers");
const {products_middlewares} = require("../middlewares");

router.get("/list", product_controller.getAllproducts );
router.post("/add",products_middlewares.verifyTypes,products_middlewares.verifyId, product_controller.addProduct);

module.exports = router;