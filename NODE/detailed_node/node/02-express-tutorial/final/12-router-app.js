

// we have one route for the login
// the rest: are with base of api/people

// group all the api/people
// group the /login
//   but in a separate file

// do this by setting up a router
// create a new folder, called 'routes'
// auth.js file for login
// people.js file for people




const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})







//          people.js
//      grab all, containing api/people
//      leave the /login alone
const express = require('express')
const router = express()

let { people } = require('/.data')

// something about setting up the base path
// we already have a base for the router in app.js
// we have to remove the base, bcoz we already have the base
router.get('/', (req, res) => {
  res.status(200).json({ success: true, data: people })
})

router.post('/', (req, res) => {
  const { name } = req.body
   if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, person: name })
})

router.post('/postman', (req, res) => {
  const { name } = req.body
  if (!name) {
    return res
      .status(400)
      .json({ success: false, msg: 'please provide name value' })
  }
  res.status(201).json({ success: true, data: [...people, name] })
})

router.delete('/:id', (req, res) => {
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

module.exports = router




//           login.j 

const express = require('express')
const router = express()

// root already covered in app.js
router.post('/', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})

module.exports = router



// make controller folder
//  make people.js folder
// MVC  model, view, controller
// 


const getPeople = (req, res) => {
  res.status(200).json({ success: true, data: people })
}




