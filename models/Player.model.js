const mongoose = require("mongoose");

const playerSchema = mongoose.Schema({
  name: String,
  lastname: String,
  teamId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team"
  }
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;