const mongoose = require("mongoose");

const VideoSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ElearningSubCategory",
    required: true,
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ElearningChannel",
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
  },
  desc: {
    type: String,
    required: true,
  },
  length: {
    type: String,
  },
  quality: {
    type: String,
  },
  resolution: {
    type: String,
  },
  VideoUrl: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

module.exports = mongoose.model("ElearningVideo", VideoSchema);
