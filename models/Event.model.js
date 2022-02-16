const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
  },
  longs: {
    type: Number,
    min: -90,
    max: 90,
  },
  width: {
    type: Number,
    min: -90,
    max: 90,
  },
  date: {
    type: String,
  },
  time: {
    type: String,
  },
},
);

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
