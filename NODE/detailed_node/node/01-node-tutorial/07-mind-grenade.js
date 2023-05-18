const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()

// no exportation here

// when you import a module you actually invoke it
// The code in this file is not just exported on its own
// When node exports this, it wraps it in a function 
// thats why when you require it, it invokes the code if you have a function that is executed in here 


// require some kind of module
// behind the scenes the module will do some cool stuff