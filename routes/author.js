const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Author = require('../models/author');

router.get('/', (req, res) => {
  res.render('author/index')
})

router.get('/new', (req, res) => {
  const author = new Author({});
  res.render('author/new', { author: author });
  console.log(author)
})

router.post('/', bodyParser.json(), async (req, res) => {
  const author = new Author({
    name: req.body.name
  })

  try {
    const newAuthor = await author.save();
    res.redirect('/authors')
    console.log(newAuthor + ' : Author is saved!')
  } catch (error) {
    console.log(error)
    res.render('author/new', {author: author, errorMessage: 'Can not save author'})
  }
})

module.exports = router;