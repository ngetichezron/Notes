// ways of sending post req
// form
// http request usign javascript

// problem:
// creating frontend to test for every route, its going to be slow
// postman for quickly testing apis
// install postman at postman.com

// test immediately, no need to build whole frontend to test one route  


//    2nd flavor
// axios makes it easier to set up http requests 
// it is preferred over javaScript fetch because it is cleaner api and better error messages

//   



// easy post, delete, put methods


// index.htmls is in the same server 
// if frontend application is separate from your server,
// you need to set up the full path where the server is located, basically a full domain 
// <form action="/login" method="POST"> </form>
 
// add, modify, delete a person using post
// you cannot configure browser to perform post request
// use tools i.e postman, insomnia
// or you can set up a f(w)orking application


// 1. Fetching Data using api
// 2. Fetching data using javascript




const express = require('express')
const app = express()
let { people } = require('./data')





// app.use applies middleware to all out routes
// app.use(express.static()).... built in modules

// static assets
app.use(express.static('./methods-public'))



// parse form data
// where we'll have a post request in the req.body property
// we'll find all the info 
// extended false property - get more info about the url encoded middleware
// check the docs
app.use(express.urlencoded({ extended: false }))
//    this is the part where we handle /login
//      in order to get the data, we need to use this middleware (app.use) (urlencoded) in order to apply to all our incoming requests
//      we will now have access to our form values in the req.body


// parse json
// handling json data
// handling incoming json data
// middleware to do that
// go to docs to check out more
// similar to login we have access to form data sent with JS in the req.body
app.use(express.json())

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
  // default reading data,, displaying them on the browser
})

app.post('/api/people', (req, res) => {
  // reading data from api/people
  // trying to add data 
  const { name } = req.body
  // whatever is set up as a value here { name } is going to be our key
  // whatever is passed in to our form is going to be the actual value the user passes 
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })


})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

app.put('/api/people/:id', (req, res) => {
  // we are going to put to a specific path : one item
  // data to update/delete
   
  //        for the specificity (2 sides)
  // looking for something specific, that's why we are using params 
  // value of the item to be updated     req.body
  const { id } = req.params
  const { name } = req.body
  // console.log(id, name)

  const person = people.find((person) => person.id === Number(id))

  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}` })
  }
  const newPeople = people.map((person) => {
    if (person.id === Number(id)) {
      person.name = name
    }
    return person
  })
  res.status(200).json({ success: true, data: newPeople })
})

app.delete('/api/people/:id', (req, res) => {
  // when deleting we are not expecting anything in the body
  // no destructuring the id, access the params directly
  // look for the person
  // send back this response
  // put and delete are mostly similar
  // if the person does exit:
  // filter out the array and remove the person from the array
  // 'remove the person from the array'


  // find person whose id matches those in params 
  const person = people.find((person) => person.id === Number(req.params.id))
  if (!person) {
    return res
      .status(404)
      .json({ success: false, msg: `no person with id ${req.params.id}` })
  }
  const newPeople = people.filter(
    (person) => person.id !== Number(req.params.id)
  )
  return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})



// More routes more functionality: app.js is getting more busy
// solution: use express router where ;
//   we will group the routes together,
//   set them as separate controllers



// MVC
// model




// GET -> read data 
// PUT -> insert data
// POST -> update data
// DELETE  -> delete data
