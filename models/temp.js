const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tempSchema = new Schema({
  /*
  title: { type: String, required: true },
  author: { type: String, required: true },
  synopsis: String,
  date: { type: Date, default: Date.now }
  */
});

const Temp = mongoose.model("Temp", tempSchema);

module.exports = Temp;
