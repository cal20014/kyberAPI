const mongoose = require("mongoose");

const kyberSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  price: Number,
  gltfFileName: String,
  thumbnailImageName: String,
  categoryList: [String],
});

const Kyber = mongoose.model("Kyber", kyberSchema);

module.exports = Kyber;
