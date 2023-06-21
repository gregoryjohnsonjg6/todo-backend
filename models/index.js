const mongoose = require('mongoose');

const toDoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us task name!']
  },
  status: {
    type: Boolean,
    default: false
  }
});

const ToDo = mongoose.model('ToDo', toDoSchema);

module.exports = ToDo;
