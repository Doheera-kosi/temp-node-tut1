// 'use strict';

const {readFile, writeFile} = require('fs').promises

const start = async() => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`, {flag:'a'}
      )
      console.log(first, second);
    } catch (error) {
      console.log(error);
    }
    
  }
  start()
  
  
  
  // const util = require('util');
  // const readFilePromise = util.promisify(readFile)
  // const writeFilePromise = util.promisify(writeFile)
  // // const { result } = require('lodash');



// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if(err) {
//         reject(err)
//       }
//       else {
//         resolve(data);
//       }
//     })
    
//   })
// }

// getText('./content/first.txt')
//   .then((result)=> console.log(result))
//   .catch((err)=> console.log(err))

























































































































// const http = require('http');
// const { join } = require('path');

// const server = http.createServer((req, res) => {
//   if(req.url === '/') {
//     res.end('Home Page')
//   }
//   if(req.url === '/about') {
//     // BLOCKING CODE !!!
//     for (let i =0; i < 1000; i++) {
//       for (let j =0; j < 1000; j++) {
//         console.log(`${i} ${j}`);
//       }
//     }
//     res.end('About Page')
//   }
//   else {
//     // res.end('Error Page')

//   }
// })

// server.listen(5000, () => {
//   console.log('Server is Listening on Port 5000...!');
// })








// const _ = require('lodash');

// const items = [1, [2, [3, [4]]]]
// const newItems = _.flattenDeep(items);
// console.log(newItems)
// console.log('hello people...!!!')