const mongoose = require('mongoose');


const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  // Otros campos que desees para tu modelo
  guests: { type: Number, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  place: { type:String, required: true},
});

module.exports = mongoose.model('Item', itemSchema);