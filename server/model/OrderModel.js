const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  userDetail: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "PatientProfile",
    required: true,
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DiagnoseProduct",
    required: true,
  },
  qty: {
    type: String,
    required: true,
  },
  mrp: {
    type: String,
  },
  price: {
    type: String,
    required: true,
  },
  taxPrice: {
    type: String,
    required: true,
  },
  deliveryCharge: {
    type: String,
    required: true,
  },
  totalAmount: {
    type: String,
    required: true,
  },
  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  orderStatus: {
    type: String,
    enum: ["Order Accepted", "Packed", "Dispatch", "Deliverd", "Cancel"],
    default: "Order Accepted",
  },
  date: {
    type: Date.UTC,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Order", OrderSchema);
 