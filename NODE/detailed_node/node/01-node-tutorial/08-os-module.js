// Built-in modules
//   OS
//   PATH
//   FS
//   HTTP


// navigate to the docs for more info



const os = require('os')
//  now we have access to all the methods and properties that this module provides
//  os.---  
// info about current user
const user = os.userInfo()
console.log(user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}
console.log(currentOS)
