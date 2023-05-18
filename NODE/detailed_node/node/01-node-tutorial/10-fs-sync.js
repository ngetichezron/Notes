// Interacting with file system

// There are two ways when it comes to file modules
//    We can do it asynchronously(non blocking) or syncronously(blocking)
//     are to be used in different cases 




// in order to set this up,
// begin by destructring the methods that you are looking for (synchronous)
const { readFileSync, writeFileSync } = require('fs')
// would be the same thing if you do as below:
//    const fs = require('fs');
//    fs.readFileSync
console.log('start')
// set up variables to read two files:
const first = readFileSync('./content/first.txt', 'utf8')
// provide a path to that specific file
// what is the encoding
const second = readFileSync('./content/second.txt', 'utf8')


// we now have both files, now lets create a new file
// if file not there, it will be created
// if there, node will override it
// if you want node to just open it without overriding, use another option/parameter 
// { flag: 'a' }
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
