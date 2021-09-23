const mongoose = require("mongoose")

const teamSchema = mongoose.Schema({
  name: String,
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event"
  },
  image: String,
})

const Team = mongoose.model("Team", teamSchema)

module.exports = Team;