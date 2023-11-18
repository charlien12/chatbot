const CatchAsyncError = require("../middleware/CatchAsyncError");
const Products = require("../models/Products");
const ErrorHandler = require("../utils/errorHandler");

const getAllProducts = CatchAsyncError(async (req, res, next) => {
  const getAllProductsData = await Products.find();
  return res.json({
    status: 200,
    message: "Get All Products",
    data: getAllProductsData,
  });
});
const createproduct = CatchAsyncError(async (req, res, next) => {
  await Products.create(req.body);
  return next(new ErrorHandler("products inserted successfully", 201));
});
const updateproduct = CatchAsyncError(async (req, res, next) => {
  const findById = await Products.findById(req.params.id);
  if (findById == null) {
    return next(new ErrorHandler("Data is not found", 404));
  } else {
    await Products.updateOne({ _id: req.params.id }, req.body);
    return next(new ErrorHandler("Update is successfully execute", 200));
  }
});
const getByIdproduct = CatchAsyncError(async (req, res, next) => {
  const findById = await Products.findById(req.params.id);
  if (findById == null) {
    return next(new ErrorHandler("Data is not found", 404));
  } else {
    return res.json({
      status: 200,
      message: "product by id",
      data: findById,
    });
  }
});
const deleteProduct = CatchAsyncError(async (req, res, next) => {
  const findById = await Products.findById(req.params.id);
  if (findById == null) {
    return next(new ErrorHandler("Data is not found", 404));
  } else {
    await Products.findByIdAndDelete(req.params.id);
    return next(new ErrorHandler("Product is delete", 200));
  }
});
module.exports = {
  getAllProducts,
  createproduct,
  updateproduct,
  deleteProduct,
  getByIdproduct,
};
