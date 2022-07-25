// 'use strict'

const express = require('express');
const app = express();

const people = require('./routes/people');
const auth = require('./routes/auth');

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false })) 
// parse json data
app.use(express.json())

app.use('/api/people', people )
app.use('/login', auth )



 


app.listen(5000, () => {
  console.log('Server is listening  on port 5000....');
})











 









































































































// const http = require('http');
// const {readFileSync} = require('fs');

// // get all files
// const homePage = readFileSync('./navbar-app/index.html')
// const homeStyles = readFileSync('./navbar-app/styles.css')
// const homeImage = readFileSync('./navbar-app/logo.svg')
// const homeLogic = readFileSync('./navbar-app/browser-app.js')

// const server = http.createServer((req, res) => {
//   // console.log(req.method);
//   const url = req.url;
//   console.log(url);
//   // home page
//   if (url === '/') {
//     // console.log(req.url);
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write(homePage)
//     res.end()
//   }
//   // About page
//   else if (url === '/about') {
//     res.writeHead(200, {'content-type':'text/html'})
//     res.write('<h1>About Page</h1>')
//     res.end()
//   } 
//   // styles
//   else if (url === '/styles.css') {
//     res.writeHead(200, {'content-type':'text/css'})
//     res.write(homeStyles)
//     res.end()
//   } 
//   // homeImage
//   else if (url === '/logo.svg') {
//     res.writeHead(200, {'content-type':'image/svg+xml'})
//     res.write(homeImage)
//     res.end()
//   } 
//   // logic
//   else if (url === '/browser-app.js') {
//     res.writeHead(200, {'content-type':'text/javascript'})
//     res.write(homeLogic)
//     res.end()
//   } 
//   // 404
//   else {
//     res.writeHead(404, {'content-type':'text/html'})
//     res.write('<h1>404- page not found</h1>')
//     res.end()
//   }
// })

// server.listen(5000)
