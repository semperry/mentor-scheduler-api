const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define collection and add schema for scheduled sessions
// date
// time
let Session = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      required: true
    },
    assigned: {
      type: Boolean,
      default: false
    },
    day: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    info: [
      {
        notes: {
          type: String
        },
        hours_studied: {
          type: String
        },
        weekly_goal: {
          type: String
        },
        questions: {
          type: String
        }
      }
  ],
    
    completed: {
        type: Boolean,
        required: true,
        default: false
  }
}
);

module.exports = mongoose.model("Sessions", Session);