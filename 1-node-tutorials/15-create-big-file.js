'use strict';

const { writeFileSync } = require('fs')
for ( let i = 0; i < 100000; i++ ) {
  writeFileSync('./content/big.txt', `hello to the world ${i}\n`, {flag:'a'})
}