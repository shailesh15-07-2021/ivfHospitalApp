const mongoose = require("mongoose");

const PastPrescriptionSchema = mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  doctorName: {
    type: String,
  },
  address: {
    type: String,
  },
  treatmentDetails: {
    type: String,
  },
  priviousMedicine: {
    type: String,
  },
  medicalReports: {
    type: String,
  },
  treatmentStart: {
    type: String,
  },
  treatmentEnd: {
    type: String,
  },
});

module.exports = mongoose.model("PastPrescription", PastPrescriptionSchema);
