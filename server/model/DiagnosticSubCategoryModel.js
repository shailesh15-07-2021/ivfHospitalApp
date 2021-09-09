
const mongoose = require("mongoose");

const DiagnosticSubCategorySchema = new mongoose.Schema({
  parentCategory: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
  },
  type: {
    type: String,
  },
});

module.exports = mongoose.model(
  "DiagnosticProductSubCategory",
  DiagnosticSubCategorySchema
);
