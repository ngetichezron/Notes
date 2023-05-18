






// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process





// setTimeout is asynchronous
// async is always offloaded 
// hence: first, third, second.
// second goes to the end of the line
// only when done with immediate (sync) then invoke the callback
