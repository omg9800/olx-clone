const express = require("express");
const router = express.Router();
var k = require("../middleware/auth");

const product = require("../controller/product");

router.get("/", product.getAllProducts);
router.get("/buyer/:id", product.getProductsByBuyerId);
router.get("/seller/:id", product.getProductsBySellerId);

router.post("/", product.addProduct);

router.put("/:uid", product.buyProduct);

module.exports = router;
