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
  week_one: [
    {
      required: true,
      sunday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      monday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      tuesday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      wednesday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      thursday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      friday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      saturday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      }
    }
  ],
  week_two: [
    {
      required: true,
      sunday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      monday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      tuesday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      wednesday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      thursday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      friday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      },
      saturday: {
        start: {
          type: String,
          required: true,
          default: ""
        },
        end: {
          type: String,
          required: true,
          default: ""
        }
      }
    }
  ]
});

module.exports = mongoose.model("User", User);
