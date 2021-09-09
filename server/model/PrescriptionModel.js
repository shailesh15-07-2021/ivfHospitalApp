const mongoose = require("mongoose");

const PrescriptionSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },
  noOfTimeToTakeMedicinePerday: {
    type: String,
    required: true,
  },
  medicineQuntityPerDose: {
    type: String,
  },
  timeDuration: {
    type: String,
    required: true,
  },
  additionalCare: {
    type: String,
  },
});

module.exports = mongoose.model("Prescription", PrescriptionSchema);
