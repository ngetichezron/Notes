

// functions that execute during request to a server 
// each middleware function has access to req and res objects 
// huge functionalities
// literally everywhere in express
// 


const express = require('express')
const app = express()


// when working with middleware, we must pass it on to the next
// next middleware unless you are terminating the whole process
// by sending on the response

//  req => middleware => res
// log method, url and date  
// middleware function


const logger = (req, res, next) => {
  const method = req.method
  const url = req.url
  const time = new Date().getFullYear()
  console.log(method, url, time)
  next()
}

// in the logger, we are accessing request object, yet at the moment, we are not passing it in.
// express passes into the middleware function, supplying req, res and next 
app.get('/', logger, (req, res) => {
  // the logger function could be placed here but will 
  // also need to be implemented in all the routes
  res.send('Home')
})
app.get('/about', logger, (req, res) => {
  res.send('About')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

// you can keep the logger function in another file to make this file tidier

// what if i had 50 more routes? 
// method that adds middlware that adds function to every route.

// create logger.js
// module.exports = logger