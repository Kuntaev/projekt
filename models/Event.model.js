const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  longs: {
    type: Number,
    required: true,
  },
  width: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Captain"
  },
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teams"
  }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
