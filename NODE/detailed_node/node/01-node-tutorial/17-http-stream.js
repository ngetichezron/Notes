var http = require('http')
var fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)  // push from readstream to writestream
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)


// developer tools, networks tab : 1.8mb
// not smart for sending over internet


// Don't send in one large file, 
// send in small chunks














// var http = require('http')
// var fs = require('fs')

// http
//   .createServer(function (req, res) {
//     // const text = fs.readFileSync('./content/big.txt', 'utf8')
//     // res.end(text)
//         const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
//         fileStream.on('open', () => {
//           fileStream.pipe(res)
//         })
//         fileStream.on('error', (err) => {
//           res.end(err)
//         })
//   })
//   .listen(5000)




















