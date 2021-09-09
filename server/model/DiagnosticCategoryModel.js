const mongoose = require("mongoose");

const DiagnosticCategorySchema = new mongoose.Schema({
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

module.exports = mongoose.model("DiagnosticProductCategory", DiagnosticCategorySchema);
