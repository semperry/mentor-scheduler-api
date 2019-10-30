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
  roles: {
    type: Array,
    default: ["mentor"]
  },
  week_one: [
    {
      sunday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      monday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      tuesday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      wednesday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      thursday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      friday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      saturday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      }
    }
  ],
  week_two: [
    {
      sunday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      monday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      tuesday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      wednesday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      thursday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      friday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      },
      saturday: {
        start: {
          type: String
        },
        end: {
          type: String
        }
      }
    }
  ]
});

module.exports = mongoose.model("User", User);
