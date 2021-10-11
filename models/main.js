const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema for todo
const TempSchema = new Schema({
  action: {
    type: String,
  },
});

// Create model for todo
const temp = mongoose.model('temp', TodoSchema);

module.exports = temp;