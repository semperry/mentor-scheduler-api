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
  week_one: [{
    sunday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    monday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    tuesday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    wednesday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    thursday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    friday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    saturday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    }
  }],
  week_two: [{
    sunday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    monday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    tuesday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    wednesday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    thursday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    friday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    },
    saturday: {
      start: {
        type: String,
        default: ""
      },
      end: {
        type: String,
        default: ""
      }
    }
  }],
});

module.exports = mongoose.model("User", User);