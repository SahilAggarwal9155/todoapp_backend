const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    maxLength: 50,
    required: true
  },
  description: {
    type: String,
    maxLength: 100,
    required: true
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now()
  },
  UpdatedAt: {
    type: Date,
    required: true,
    default: Date.now()
  },

  
});

module.exports = mongoose.model("Todo" , todoSchema);