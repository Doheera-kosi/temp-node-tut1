const express = require('express');
const app = express();
const morgan = require('morgan');
const logger = require('./logger');
const authorize = require('./authorize');

// req => middleware => res

// 1. use vs route
// 2. options - our own / express / third party

// // Moved to logger.js
// const logger = (req, res, next) => {
//   const method = req.method;
//   const url = req.url;
//   const time = new Date().getFullYear();
//   console.log(method, url, time);
//   next()
// }

// Passing in the middleware function
// app.use([logger, authorize])
app.use(morgan('tiny'))
app.use(express.static('./public'))
// api/home/about/product/contacts

app.get('/', (req, res) => {
  res.send('Home')
})


app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items',(req, res) => {
  console.log(req.user);
  res.send('Items')
})

app.get('/contact', (req, res) => {
  res.send('Contact Us')
})



app.listen(5000, () => {
  console.log('Server is listening  on port 5000....');
})

