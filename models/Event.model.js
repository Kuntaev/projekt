const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
  name: {
    type: String,
  },
  longs: {
    type: Number,
  },
  width: {
    type: Number,
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
