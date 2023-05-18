// use streams when reading files
// sync/ async -> reads whole file
// size becomes big with big data




const { writeFileSync } = require('fs')
for (let i = 0; i < 10000; i++) {
  writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
