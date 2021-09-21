const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
  Name: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  }
})

const Team = mongoose.model("Team", teamSchema)

module.exports = Team;