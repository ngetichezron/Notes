// Event Loop -> allows Node.js to perform non-blocking I/O operations
// by offloading operations to the system kernel whenever possible.
// even though jS is single - threaded 

// offloading

//download course API

// browser provides API's so that we can offload the time 
// consuming tasks



// I have an app
// i have users
// popular app
// 8 of them
// all users requests coming in
// some time consuming
//         //code perform sth timeconsuming
// rest of the users would have to wait
// waste time on waiting
// e. l registers callback 
// only when op complete, executes it

//   same scenario
// run immediate code first, push callback to last
// then execute callback later when we have time








//---------------Event Emitter-----------------------------




// get back the class
//  two ways: 1. if want custom extend from class
// 2. otherwise just for emitting and handling events create instance
const EventEmitter = require('events')


  // basic setup 

  // customEmitter.on('response', {
  //   console.log(`data recieved `)
  // })

  // customEmitter.emit('response', 'john', 34)


const customEmitter = new EventEmitter()
// instance of our class 

// on and emit methods (many other methods )
// keep track of the order
// additional arguments
// built-in modules utilize it

// on to listen, emit to emit an event
customEmitter.on('response', (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`)
})

customEmitter.on('response', () => {
  console.log('some other logic here')
}) 

// we can have as many functions that are listening to an event and do some logic 
// order of functions matters 1. listen then 2. Emit
customEmitter.emit('response', 'john', 34)



// heavy concept in nodejs