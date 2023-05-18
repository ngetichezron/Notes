// const items = ['item1', 'item2']
// we have two options: 
// 1. Set up the value (items):
//     module.exports.(whatever the value is(items))
//     module.exports.items =  module.exports.items = ['item1', 'item2']   // go right into this without fist using const


module.exports.items = ['item1', 'item2']
const person = {
  name: 'bob',
}

// if you are a true rebel...
module.exports.singlePerson = person
