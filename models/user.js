const mongoose = require("mongoose");
const schema = mongoose.Schema;
const UserSchema = new schema({
 
  name: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },

  adresse: {
    type: String,
    // require: true,
  },
  phone: {
    type: String,
    // require: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
})
module.exports = mongoose.model("user", UserSchema);
