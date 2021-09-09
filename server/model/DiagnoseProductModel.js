const mongoose = require("mongoose");

const DiagnoseProductSchema = new mongoose.Schema({
  diagnose: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DiagnosticProductSubCategory",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  headline: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
  },
  specification: {
    type: String,
    required: true,
  },
  requirments: {
    type: String,
  },
  mrp: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  productPictures: { img: { type: String } },
});

module.exports = mongoose.model("DiagnoseProduct", DiagnoseProductSchema);
