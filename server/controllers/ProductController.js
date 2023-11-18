const Products = require("../models/Products");

const getAllProducts = async (req, res) => {
  const getAllProductsData = await Products.find();
  return res.json({
    status: 200,
    message: "Get All Products",
    data: getAllProductsData,
  });
};
const createproduct = async (req, res) => {
  const getProduct = await Products.create(req.body);
  return res.json({
    status: 201,
    message: "Get All Products",
    data: getProduct,
  });
};
const updateproduct = async (req, res) => {
  const findById = await Products.findById(req.params.id);
  if (findById == null) {
    return res.json({
      status: 400,
      message: "Data is not found",
    });
  } else {
    await Products.updateOne({ _id: req.params.id }, req.body);
    return res.json({
      status: 200,
      message: "Update Successfully",
    });
  }
};
const getByIdproduct = async (req, res) => {
  const findById = await Products.findById(req.params.id);
  if (findById == null) {
    return res.json({
      status: 400,
      message: "Data is not found",
    });
  } else {
    return res.json({
      status: 200,
      message: "product by id",
      data: findById,
    });
  }
};
const deleteProduct = async (req, res) => {
  const findById = await Products.findById(req.params.id);
  console.log(findById);
  if (findById == null) {
    return res.json({
      status: 400,
      message: "Data is not found",
    });
  } else {
    await Products.findByIdAndDelete(req.params.id);
    return res.json({
      status: 200,
      message: "Data is delete",
    });
  }
};
module.exports = {
  getAllProducts,
  createproduct,
  updateproduct,
  deleteProduct,
  getByIdproduct,
};
