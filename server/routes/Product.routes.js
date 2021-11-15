const router = require('express').Router();
const {product_controller} = require("../controllers");
const {products_middlewares} = require("../middlewares");


router.get("/list", product_controller.getAllproducts );
router.post("/add",products_middlewares.verifyTypes,products_middlewares.verifyId, product_controller.addProduct);
router.put("/update",products_middlewares.verifyTypes, product_controller.updateProduct);
router.delete('/delete/:id', product_controller.deleteproduct);

module.exports = router;