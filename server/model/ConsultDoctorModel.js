const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
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
  purpose: {
    type: String,
    required: true,
  },

  medicalReports: {
    type: String,
  },
  paymentMethod: {
    type: String,
  },
  paymentResult: {
    id: {
      type: String,
    },
    status: {
      type: String,
    },
    upload_status: {
      type: String,
    },
    emailAddress: {
      type: String,
    },
  },
  fee: {
    type: Number,
    required: true,
    defualt: 0.0,
  },

  isPaid: {
    type: Boolean,
    required: true,
    default: false,
  },
  paidAt: {
    type: Date,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Appintment", AppointmentSchema);
