'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
  console.log('request event!');
  res.end('Hello EveryOne Here');
});

server.listen(5000, () => {
  console.log('Server Listening on port : 5000....');
})












// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems)
// console.log('hello people...!!!')