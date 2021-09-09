const mongoose = require("mongoose");

const PatientProfileSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  medicalHistory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "UsPastPrescriptioner",
  },
  age: {
    type: String,
    required: true,
    max: 2,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    required: true,
  },
  height: {
    type: String,
  },
  weight: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  landmark: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pincode: {
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

module.exports = mongoose.model("PatientProfile", PatientProfileSchema);
