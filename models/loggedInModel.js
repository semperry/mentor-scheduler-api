const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoggedIn = new Schema({
  email: {
    type: String,
    required: true
  },
  session: {
    type: String,
    required: true,
    unique: true
  },
  session_start: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("logged_in", LoggedIn);
