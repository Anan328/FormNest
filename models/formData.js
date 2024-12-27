const mongoose = require('mongoose');


const formDataSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
  },
  { timestamps: true } 
);

module.exports = mongoose.model('FormData', formDataSchema);