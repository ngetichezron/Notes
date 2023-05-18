const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
// static means server does not need to change it.
// example: styles, images, javascript 
app.use(express.static('./public'))
// setup a folder by the name public, 
// put all static files here

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
//  
// index can still be put in the public folder
// adding to static files
// using server side rendering
//})



// all the requests that will hit 404
app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000....')
})





// express is used to set up api or templates with server side rendering

// api in express- setting up http interface to interact with data
// data sent using json
// to send back our response, use res.json() 
// server provides data 
// mobile app to request using http request


// ssr
// set up templates and send back entire css and javascripts
