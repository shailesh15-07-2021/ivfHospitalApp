const mongoose = require("mongoose");

const PharmacyProductSchema = new mongoose.Schema({
  pharmacy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  prescription: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prescription",
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  name: {
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
  precausions: {
    type: String,
  },
  productFor: {
    type: String,
  },
  mrp: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
  productPictures: { img: { type: String } },
});

module.exports = mongoose.model("PharmacyProduct", PharmacyProductSchema);
