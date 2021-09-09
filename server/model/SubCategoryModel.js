const mongoose = require("mongoose");

const SubCategorySchema = new mongoose.Schema({
  parentCategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ElearningCategory",
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

module.exports = mongoose.model("ElearningSubCategory", SubCategorySchema);
