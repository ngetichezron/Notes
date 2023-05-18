
// built in modules relying on event emitters



const http = require('http')

// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)







//    STREAMS
// used to read/write sequentially
// continous source or big file
// 4 diff types in node
// writeable, readable, duplex, transform
// extends event emmiters
// many built in modules use streaming interface



