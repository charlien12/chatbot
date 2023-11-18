const mongoose = require("mongoose");
const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please enter product name "],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "please enter product description "],
    },
    price: {
      type: Number,
      required: [true, "please enter product Price"],
      maxLength: [8, "Price can't be exceed 8 characters"],
    },
    rating: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    cateogry: {
      type: String,
      required: [true, "Please enter product cateogry"],
    },
    stock: {
      type: Number,
      required: [true, "Please enter product stock"],
      maxLength: [4, "Price can't be exceed 4 characters"],
      default: 1,
    },
    numOfreviews: {
      type: Number,
      default: 0,
    },
    reviews: [
      {
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
  },
  { timestamp: true }
);
module.exports = mongoose.model("Product", productSchema);
