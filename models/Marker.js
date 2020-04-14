const mongoose = require('mongoose');
const MarkerSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  position: Object
})
module.exports = mongoose.model('Marker', MarkerSchema);
