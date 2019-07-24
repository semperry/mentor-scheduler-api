const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const LoggedIn = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  session: {
    type: String,
    required: true,
    unique: true
  }
});

module.exports = mongoose.model("logged_in", LoggedIn);
