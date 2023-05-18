 
 // Trying to implement the previous synchronous function in async pattern
 
 
 const { readFile, writeFile } = require('fs')  // async.. sync removed


// for the functionality of asyncronous function, we have to provide a callback
// callback - run that callback when done
//    when whatever functionality we have is done, then we run that callback
//    just as like we do with an addEventListener with a button
//         we go with addEventListener 
//         we add whatever the event (clickEvent in this case)
//         Now pass in the callback function
//         That callback function will run every time we click a button

// Here the same functionality is implemented
// We have the readfile() function and use it since it is already destructured
// Provide the path as the first argument
// pass in 'utf8' as the second argument to avoid returning a buffer when you log result to the console
// provide the callback function as the third argument
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  // now where you will set up your functionality
  // console.log(result) to view your result 
  // utf8 is necessary to decode 

  // callbacks -> setup the functionality whereby you'll get the results

  // assign to variable
  // read second file
  // create new file
  const first = result
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    const second = result
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('done with this task')
      }
    )
  })
})
console.log('starting next task')



// Difference between sync and async
  


// Alternatives to the callback hell
//   callback messy
// use promises
// use async await
// you can use callback but code gets messy
//    async await easy to use













//        Sync
// Time consuming for tasks - more users
// Javascript reading code synchronously
// application down
// Tasks take long time 
// Start a task only when done with previous one



//       Async
// before, inside after (insertion of log)
// start, starting next task ...
// offload the task and continue
// user comes and wants a certain functionality:
// sure, offload the task and continue
// Start a task, offload the task and continue serving others (start next task right away)