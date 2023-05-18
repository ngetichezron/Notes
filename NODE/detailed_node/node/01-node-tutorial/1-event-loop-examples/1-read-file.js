// async version of readfile




const { readFile, writeFile } = require('fs')

console.log('started a first task')
// CHECK FILE PATH!!!!
// readfile is asynchronous

// event loop will offload this to a  file system
// move to the next section 
// only execute when you get the error or result( response) then execute callback
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  // offload this
  // only when i get the result then execute the callback
  console.log(result)
  console.log('completed first task')
})
console.log('starting next task')



