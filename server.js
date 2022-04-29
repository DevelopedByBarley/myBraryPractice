/** Express and libraries */
const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

//Set routers
const indexRouter = require('./routes/index')
const authorRouter = require('./routes/author')


/** Server  */
const mongoose = require('mongoose');

app.set('view engine', 'ejs') ;
app.set('views', __dirname  + '/views');
app.set('layout', 'layouts/layout');

app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({extended: true}));


//Routes

app.use('/', indexRouter)
app.use('/authors', authorRouter)



// Mongoose database connection!
mongoose.connect('mongodb://localhost/myBraryPcDb');
const db = mongoose.connection
.on('error', error => console.log(error))
.once('open', () => console.log('Connected to Mongoose!'))

app.listen(8080)