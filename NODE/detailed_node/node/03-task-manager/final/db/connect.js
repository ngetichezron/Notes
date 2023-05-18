
// express route setup:
// basic array to store some list of items on our server
// based on request we performed some kind of operation on the list 
// send back the response
// not a serious approach to store data

// Mongo
// Stores eveyting as json
// non relational - does not care about the relation of data
// instead of tables we have collections which rep group of items 
// instead of rows we have documents which rep single items 
// a document is a set of key: value pairs 
// datatypes: strings numbers, arrays objects etc


// cloud option
// atlas - creators of mongo
// 44:12
// consult the docs
 


const mongoose = require('mongoose')

// no need to do this in v6??
const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
}

module.exports = connectDB

















// const mongoose = require('mongoose')

// const connectionString = ' '

// //           returns a promise
// mongoose.connect(connectionString0).then(()=>console.log('CONNECTED TO THE DB...')).catch((err)=>console.log(err);) 

// 1:04
