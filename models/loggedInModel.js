const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoggedIn = new Schema({
  email: {
    type: String
  },
  session: {
    type: String,
    unique: true
  },
  session_start: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("loginSessions", LoggedIn);
