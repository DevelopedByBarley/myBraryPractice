const mongoose = require('mongoose');

const bookModel = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  pageCount: {
    type: Number,
    required: true,
  },
  coverImageName: {
    type: String,
    required: true
  },
  publishDate: {
    type: Date,
    required: true
  },
  createdAt:{
    type: Date,
    required: true,
    default: Date.now
  },
  description: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'Author'
  }
})

module.exports = mongoose.model('Book', bookModel)