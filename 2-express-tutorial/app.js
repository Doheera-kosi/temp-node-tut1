const http = require('http');

const server = http.createServer((req, res) => {
  console.log('user hit the server up...')
})

server.listen(5000)
