const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
  email: {
    type: String,
    // validate: /^[A-Za-z0-9 ]*$/
  },
  phone: {
    type: String,
    validate: /^[A-Za-z0-9 ]*$/
  },
  message: {
    type: String,
    required: true,
    validate: /^[A-Za-z0-9 ]*$/
  },
});

const Contact1 = mongoose.model('Contact', contactSchema);

module.exports = Contact1;
