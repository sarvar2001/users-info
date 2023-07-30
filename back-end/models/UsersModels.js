const { Schema, model } = require("mongoose");

const UsersModel = new Schema({
  title: {
    type: String,
    required: true,
  },
  telnumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: String,
  },
});

module.exports = model("Users", UsersModel);
