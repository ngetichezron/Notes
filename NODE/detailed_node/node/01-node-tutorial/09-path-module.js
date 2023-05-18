// with node we can interact with the file system, something that cannot be done with javascript in the browser

// path module allows us to interact with paths easily


const path = require('path')

console.log(path.sep) // platform specific separator

const filePath = path.join('/content/', 'subfolder', 'test.txt')
// joins a sequence of path segments using the platform specific separator
//returns a normalized resulting path
console.log(filePath)


// access the last portion (test.txt)
const base = path.basename(filePath)
console.log(base)


// returns an absolute path
// accepts a sequence of paths / path segments and resolves it into an absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
//      Our application is going to run in different environments
//      The path to some kind of resources is going to be different in different environments


