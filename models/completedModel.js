const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CompletedSessions = new Schema({
  id: {
    type: String
  },
  completed: {
    type: Date,
    default: new Date()
  }
});

module.exports = mongoose.model("complete", CompletedSessions);
