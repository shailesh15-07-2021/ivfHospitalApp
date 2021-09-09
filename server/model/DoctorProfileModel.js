const mongoose = require("mongoose");

const DoctorSchema = new mongoose.Schema({
  specelization: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "DoctorSpecelization",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
    default: 0,
  },
  desc: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    max: 2,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
  },
  Address: {
    type: String,
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
    default: Date.now,
  },
});

module.exports = mongoose.model("DoctorProfile", DoctorSchema);
