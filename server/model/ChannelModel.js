const mongoose = require("mongoose");

const ChannelSchema = new mongoose.Schema({
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
  channelName: {
    type: String,
    required: true,
  },
  channelDesc: {
    type: String,
  },
  channelSlug: {
    type: String,
  },
  status: {
    type: Boolean,
    defaultL: true,
  },
  image: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("ElearningChannel", ChannelSchema);
