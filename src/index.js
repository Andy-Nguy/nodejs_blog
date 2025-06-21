const express = require('express');
const path = require('path');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));

//Template engine setup
app.engine('hbs', hbs.engine({
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'resources', 'views', 'layouts'),
  defaultLayout: 'main',
  partialsDir: path.join(__dirname, 'resources', 'views', 'partials')
}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));


app.get('/', (req, res) => {
  res.render('home');
})
app.get('/news', (req, res) => {
  res.render('news');
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})