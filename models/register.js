const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const registerDetails = new Schema(
  {
    first_name: {
      type: String
    },

    last_name: {
      type: String
    },
    mobile: {
      type: String
    },
    roles: {
      type: Array
    },
    email: {
      type: String
    },
    password: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const registerSchema = mongoose.model("users", registerDetails);
module.exports = registerSchema;
