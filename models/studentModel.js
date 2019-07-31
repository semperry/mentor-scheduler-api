const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Student
const Student = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: String,
    required: true
  },
  course: {
    type: String
  },
  assigned_to: {
    type: String
  },
  last_submitted_by: {
    type: String
  },
  day: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  special_instructions: {
    type: String
  },
  info: [
    {
      notes: {
        type: String
      },
      percentage: {
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
      },
      submitted_by: {
        type: String,
        required: true
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],
  completed: {
    type: Boolean,
    required: true,
    default: false
  }
});

module.exports = mongoose.model("student", Student);
