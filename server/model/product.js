const mongoose = require('mongoose')

const Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId

const ProductSchema = new Schema({
  // author: ObjectId,
  coverImage: String,
  name: {type: String, required: true, max:[60, '最大６０文字までです']},
  price: Number,
  description: String,
  heading1: String,
  heading2: String,
  heading3: String,
  heading1_desctiption: String,
  heading2_desctiption: String,
  heading3_desctiption: String
});

module.exports = mongoose.model('product', ProductSchema)