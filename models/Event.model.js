const mongoose = require("mongoose")

const eventSchema = mongoose.Schema({
  long: Number,
  width: Number,
  date: String,
  time: String
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event