const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')


// 1. use vs route
// 2. options - our own / express / third party

//  req => middleware => res
// order matters, should be above the routes
// app.use(logger) 
// app.use('/api', logger) applies to all the routes after the /api/   (when the base of the request matches)
// omitting the path applies to all routes


//create new file authorize.js
const authorize = (req, res, next) => {
  const { user } = req.query;
  if (usere === 'john' ){
    req.user = {name:'john', id: 3 }
    next()
  }
  else {
    res.status(401).send('Unauthorized')  // not a way to authorize people
  }
  console.log('authorize');
  next()


  // set up querry string
  // if the user provides a querry string in the url
  // send back the resource user requesting
  // if not, send back for one unauthorized
}

// module.exports = authorize

// execute multiple midd[logger, authorize]leware functions in app.use:
// place them in the array
// they will be executed in the order in which they are placed 
app.use([logger, authorize])
// api/home/about/products
app.get('/', (req, res) => {
  res.send('Home')
})
app.get('/about', (req, res) => {
  res.send('About')
})
app.get('/api/products', (req, res) => {
  res.send('Products')
})
app.get('/api/items', (req, res) => {
  console.log(req.user)  // the request object has been attached the property
  // in any of the routes we can now have access to the user
  // middleware is thus important in structuring our application as legal blocks
  // many pieces of functionality
  // combines them to make a nice working express server
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
 





// how can we have the if condition in our middleware function


// add middleware in a route
// i dont want to apply app.use to all my routes
// i only want to check for authorized users in api/items route
// 

// app.get('/api/items',logger ,(req, res) =>
// passing two middlewares in a single route:
// app.get('/api/items', [logger, authorize],(req, res) =>




// what are our options when it comes to middleware
//   we can set up our own middleware
//   use express which provides built in middlewares. refer to docs and use them
//   use third party
//           have to be installed
//           i.e morgan npm



app.use(express.static('./public'))
//app.use function is expecing a middleware : in express, we have a built in middleware by the name of static
