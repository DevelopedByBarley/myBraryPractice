const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const Author = require('../models/author')
const Book = require('../models/book')


router.get('/', (req,res) => {
  
})

router.get('/new', (req,res) => {

})

router.post('/', bodyParser.json(), async (req,res) => {
  const book = new Book({
    name: req.body.name,
    title: req.body.title,
    pageCount: req.body.pageCount,
    publishDate: req.body.publishDate,
    createdAt: req.body.createdAt,
    description: req.body.description,
    author: req.body.author,
  })

  try {
    const newBook = await book.save();
    console.log(newBook + ' : New Book is saved!');
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;

/**
 * name: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  pageCount: {
    type: Number,
    required: true,
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
  author: {
    type: mongoose.Schema.Types.ObjectId,
    required: false,
    ref: 'Author'
  }
 */