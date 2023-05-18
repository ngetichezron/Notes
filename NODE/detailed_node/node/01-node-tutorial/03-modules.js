// Node uses common js library
// CommonJS, every file is module (by default)
// every file in node is a module
// Modules - Encapsulated Code (only share minimum (what we want))


// you can simply require or you can assign it to a variable like below
// every time you create your own module, you will use a dot and slash: './'
const names = require('./04-names')
//     console.log(names)
const sayHi = require('./05-utils')
// for javascript file no need to add .js extension
const data = require('./06-alternative-flavor')
require('./07-mind-grenade')
// If we have a function inside of a module that we invoke,
// That code will run even though we do not assign it to a variable
// _third party modules_

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
//sayHi(john) error: john not defined


// vanilla js



// Do I have to put all my application in one file?
// yes and no
// you will execute one file with nodejs but
// you can create several modules



// const john = 'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello there ${name}`)
// }

// sayHi('susan')
// sayHi(john)
// sayHi(peter)

// // names to be separate files
// // function is separate files, as well as other future functions
// // access them throughout the application
// // in this way you will have smaller files and a more structured application

