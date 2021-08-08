const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const lines = new Array()

rl.on('line', (input) => {
  lines.push(parseInt(input.trim()))
}).on('close', () => {
  let max = 0
  let cnt = 0
  for (let i = lines[0]; i >= 1; i--) {
    if (lines[i] > max) {
      max = lines[i]
      cnt++
    }
  }

  console.log(cnt)

  process.exit()
})
