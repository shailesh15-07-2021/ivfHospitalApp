const mongoose = require("mongoose");

const DiagnoseSchema = new mongoose.Schema({
  diagnose: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  address: {
    type: String,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("DiagnoseProfile", DiagnoseSchema);
