const express = require('express')
const app = express()
const { products } = require('./data')

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

// get request for the resource
// when you are requesting a collectin of data, you are not always returning everything for that specific product
// only when i look for this specific product then I will return everything.
app.get('/api/products', (req, res) => {
  // iterate over the products
  const newProducts = products.map((product) => { 
    // create an array and reference each item as a product
    const { id, name, image } = product
    // destructure the properties out of the product
    return { id, name, image }
  })
  // if we were to return everything, then we would use res.json(product)

  res.json(newProducts)
})
app.get('/api/products/:productID', (req, res) => {
  // console.log(req)
  // console.log(req.params)
  const { productID } = req.params


  // can you back track to produce only resource for product with id === 1? ( 5: 40 )
  const singleProduct = products.find(
    (product) => product.id === Number(productID)
    // res.json(singleProduct)
  )
  if (!singleProduct) {
    return res.status(404).send('Product Does Not Exist')
  }

  return res.json(singleProduct)
})


// route params can get complex
// look for all reviews and look for review ID 
app.get('/api/products/:productID/reviews/:reviewID', (req, res) => {
  console.log(req.params)
  res.send('hello world')
  // here you will find that you get the productID and also the reviewID
})


// querry string parameters  / (url parameters)
// way of sending small amounts of data to the server using url
// to query db, filter results ets
// which params, functionality to be considered

// sort this hacker news from this api
app.get('/api/v1/query', (req, res) => {
  // console.log(req.query)
  // res.send('Hello, World!)
  const { search, limit } = req.query
  let sortedProducts = [...products]

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search)
    })
  }
  if (limit) {
    // there is something about strings that 'Number' resorts below
    sortedProducts = sortedProducts.slice(0, Number(limit))
  }
  if (sortedProducts.length < 1) {
    // res.status(200).send('no products matched your search');
    return res.status(200).json({ sucess: true, data: [] })
    // if we don't explicitly return, we get a server error
    // i.e you send back a response and javascript keeps reading the code
    // express is confused , wait a minute, i send back a respond what are you still asking for
    // you can send back many based on conditions
    // 'cannot srequesting for everythinget headers after they are sent to the client
    // you can only set one response per request
  }
  res.status(200).json(sortedProducts)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})

//  /query?Search   

// its not a must to always set up query differently
// you can set it up where you are getting a list
// i.e in products



// if there is a querry
// sort that data
// filter it
// set up some pages etcs
// if no query string parameters, send back the whole product.
//     can you change search and limit to api and products? functionality will work

// Route parameters
// think of them as place holders where user provides data
// using requests and params, we can access that data and then set up some kind of logic
// route :productID

