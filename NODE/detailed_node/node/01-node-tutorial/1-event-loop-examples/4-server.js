







const http = require('http')

const server = http.createServer((req, res) => {
  console.log('request event')
  res.end('Hello World')
})





// "Hey Event loop, just keep listening to those incoming requests "

// this process stays alive
// listen is asnynchronous
// the moment we set it up
// event loop is just waiting for those requests to come in
// when they come in, we then run our callback
server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})




