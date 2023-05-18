// return a promise
// use async await
// wait till promise is settled
// then decide what you want to do.




// instead of using callbacks, nesting
// set up everything with async await
// syntax cleaner and more easier to read







const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)

const start = async () => {
  try {
    const first = await readFile('./content/first.txt', 'utf8')
    //const first = await readFilePromise('./content/first.txt', 'utf8')
    const second = await readFile('./content/second.txt', 'utf8')
    //const first = await writeFilePromise('./content/first.txt', 'utf8')
    await writeFile(
      './content/result-mind-grenade.txt',
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: 'a' }
    )
    console.log(first, second)
  } catch (error) {
    console.log(error)
  }
}

start()



//       to better this as above: set up without the wrapping function
// const start = async () => {
//   try {
//     const first = await getText('./content/first.txt', 'utf8')
//     const second = await getText('./content/second.txt', 'utf8')
//     console.log(first, second)
//   } catch (error) {
//     console.log(error)
//   }
// }

// start()










//    still a pain though, only using promises : two file reads and read a file 

//                 wrapper funtion
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, 'utf8', (err, data) => {
//       if (err) {
//         reject(err)
//       } else {
//         resolve(data)
//       }
//     })
//   })
// }
// getText('./content/first.txt')
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err))



const { readFile } = require('fs')

// problem with multiple functions
// i.e reading two files and write one
// solution:
// turn this into a promise
// later set up async await
 
readFile('./content/first.txt', 'utf-8',(err, data) =>{
  if (err){
    return
  } else {
    console.log(data);
  }
})















// EVENTS IN NODE JS

// handle events in program: click function, hover, 
// Event-Driven-Programming


// flow of program determined by events that occur as program executes



// event driven programming possible in sever side programming 
// listen for specific events
// register functions that will respond to those events








 