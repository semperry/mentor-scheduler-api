const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  role: {
    type: String
  },
  week_one: {
    type: Array,
    default: {
      sunday: {
        start: "",
        end: ""
      },
      monday: {
        start: "",
        end: ""
      },
      tuesday: {
        start: "",
        end: ""
      },
      wednesday: {
        start: "",
        end: ""
      },
      thursday: {
        start: "",
        end: ""
      },
      friday: {
        start: "",
        end: ""
      },
      saturday: {
        start: "",
        end: ""
      }
    }
  },
  week_two: {
    type: Array,
    default: {
      sunday: {
        start: "",
        end: ""
      },
      monday: {
        start: "",
        end: ""
      },
      tuesday: {
        start: "",
        end: ""
      },
      wednesday: {
        start: "",
        end: ""
      },
      thursday: {
        start: "",
        end: ""
      },
      friday: {
        start: "",
        end: ""
      },
      saturday: {
        start: "",
        end: ""
      }
    }
  }
});

module.exports = mongoose.model("User", User);
