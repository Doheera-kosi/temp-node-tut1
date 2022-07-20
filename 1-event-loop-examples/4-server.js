'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event!');
  res.end('Hello EveryOne Here');
});

server.listen(5000, () => {
  console.log('Server Listening on port : 5000....');
})