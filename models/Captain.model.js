const mongoose = require("mongoose");


const captainSchema = mongoose.Schema({
  name: String,
  mail: String,
  surname: String,
  login: {
    type: String,
    unique: true,
  },
  password: String,
})

const Captain = mongoose.model("Captain", captainSchema);

module.exports = Captain