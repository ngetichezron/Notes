
// http module
// Express - abstraction of the http module




const http = require('http')

//                                  callback function, requests and response params

const server = http.createServer((req, res) => {

  //       which url property is the user requesting
  //   if (req.url === '/') {
  //     res.end('Welcome to our home page')
  //   }
  //   if (req.url === '/about') {
  //     res.end('Here is our short history')
  //   }
  //   res.end(`
  //   <h1>Oops!</h1>
  // <p>We can't seem to find the page you are looking for</p>
  // <a href="/">back home</a>
  //   `)
  // ###################################
  // ###################################
  //
  //  IF YOU GET ERRORS WHILE USING ABOVE SETUP,
  // SWITCH TO IF, ELSE IF, ELSE (BELOW)
  // WE COVER THE CAUSE, LATER IN EXPRESS TUTORIAL
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">back home</a>
    `)
  }
})

server.listen(5000)




// const server = http.createServer((req, res) =>{
//   res.write('Welcome to our home page')
//   res.end()
// })



// npm enables us to
// reuse our own code in other projects
// use code written by others
// share our solution with other developers



// package - reusable code
// modules
// dependencies
//        all three used interchangably

// no quality control in npm, sniff out the bad ones
// high downloads = good

// bugs fixed in a package - someone faced it before


// # npm i <packageName>       Local
// # sudo npm install -g <packageName>    Global


// package.json - stores important info about project
//    manual approach -> in the root
//    npm init -> automatic   step by step, enter to skip
//    npm init -y   everything default

// crucial when sharing projects with other developers



// node_modules -> where all dependencies are stored
// there are some packages (big ones) that have other dependencies i.e bootstrap


// node packages vs installed
// external - first install
// assign to variable
const _ = require('lodash')
const items = [1, [2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems);



// push code to github without node_modules
// create file:  .gitignore
// place nodemodules in .gitignore
//       /node_modules
// git add.
// git commit -m "first commit"

// dev dependencies - used when developing the app
// nodemon in developing to restart application
// nodemon, 
//    npm i nodemon --save-dev
//    nm i nodemon -D


// Scripts
// set up commands
// in the commands, provide a value
// "scripts"; {
//    "start": "node app.js"
// } 

// running the commands
//   npm start
//   npm run start


// npm uninstall 'packageName'
// npm uninstall bootstrap

// gatsby 
//    remove node_modules
//    remove package.lock.json
//    run npm install to recreate your fashion


// npx create-react-app  

// package.lock.json
//    contains all versions of the dependencies 
//    helps when application might be rendered obsolete due to version
//      changes in dependencies (packages that dependecies are using)
//    google these things to find out more
