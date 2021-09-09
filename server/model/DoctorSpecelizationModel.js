const mongoose = require("mongoose");

const DoctorSpecialitySchema = new mongoose.Schema({
  name: {
    type: String,
    requred: true,
    unique: true,
    trim: true,
  },
  image: { type: String },
  type: {
    type: String,
  },

  updatedAt: Date,
});

module.exports = mongoose.model("DoctorSpecelization", DoctorSpecialitySchema);
