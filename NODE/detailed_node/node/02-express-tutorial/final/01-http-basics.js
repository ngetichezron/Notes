



const http = require('http')

// callback is going to be invoked each time a user hits our server
const server = http.createServer((req, res) => {
  //  which method  am I getting 
  // which resource is being requested 
  // is there data (user passing in)
  // console.log(req.method)
  // console.log(req);
  const url = req.url
  // console.log(req.url);
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })  // hey, am passing in text/html
    res.write('<h1>home page</h1>')
    res.end() // to show that the communication is over
    //res.end('<h1>home page</h1>')
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>about page</h1>')
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)



   
