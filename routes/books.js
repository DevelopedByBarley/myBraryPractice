const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const multer  = require('multer')
const upload = multer({ dest: 'public/uploads/images' })


const Author = require('../models/author')
const Book = require('../models/book')


router.get('/', async (req,res) => {
  res.render('book/index')
})

router.get('/new', async (req,res) => {
  const book = await Book.find({})
  const author = await Author.find({});

  res.render('book/new', {books: book, authors: author})
})

router.post('/', upload.single('cover'), bodyParser.json(), async (req,res) => {
  const coverFileName = req.file.filename
  const book = new Book({
    title: req.body.title,
    pageCount: req.body.pageCount,
    coverImageName: coverFileName,
    publishDate: req.body.publishDate,
    createdAt: req.body.createdAt,
    description: req.body.description,
    author: req.body.author
  })

  try {
    const newBook = await book.save();
    console.log(newBook + ' : New Book is saved!');
  } catch (error) {
    console.log(error);
  }
})

module.exports = router;
