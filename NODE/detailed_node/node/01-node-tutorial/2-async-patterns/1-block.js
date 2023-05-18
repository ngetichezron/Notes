// sync and async
// async great no blocking
// if using callback, gets messy.....nesting 
// alternative to use,, which is much cleaner




const http = require('http')

const server = http.createServer((req, res) => {
  // check for urls
  // even if we get diff resource
  // still blocked by other user if 
  // he/she is requesting some resource where we have the blocking code



  // what the user is requesting
  if (req.url === '/') {
    res.end('Home Page')
  }
  if (req.url === '/about') {
    // blocking code i.e nested loop

    // you should always try to set up your code asynchronously
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`)
      }
    }
    res.end('About Page')
  }
  res.end('Error Page')
})

server.listen(5000, () => {
  console.log('Server listening on port : 5000....')
})








