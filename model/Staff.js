const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  reportsTo: { type: String, default: null },
});

module.exports = mongoose.model('Staff', staffSchema);
