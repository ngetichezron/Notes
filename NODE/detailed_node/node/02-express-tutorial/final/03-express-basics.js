// express - minimum ,flexible nodejs webapp framework
// dev websites and webapps and api's easy 
// built on top of node and http
// not built in

// npm install express --save
// npm install express@4.17.1 --save





const express = require('express')
const app = express()

app.get('/', (req, res) => {
  console.log('user hit the resource')
  res.status(200).send('Home Page')
  // res.send('Home Page')
})

app.get('/about', (req, res) => {
  res.status(200).send('About Page')
})
//(all_paths, callback function)
app.all('*', (req, res) => {
  res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
  console.log('server is listening on port 5000...')
})

// app.get
// app.post
// app.put
// app.delete
// app.all        for all, when you cannot find resource
// app.use          middleware
// app.listen
