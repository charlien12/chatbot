const express = require("express");
const {
  getAllProducts,
  createproduct,
  updateproduct,
  deleteProduct,
  getByIdproduct,
} = require("../controllers/ProductController");
const router = express.Router();
router.route("/products").get(getAllProducts).post(createproduct);
router
  .route("/products/:id")
  .put(updateproduct)
  .delete(deleteProduct)
  .get(getByIdproduct);
module.exports = router;
