const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

let n = 0

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1
  }

  return factorial(n - 1) * n
}

rl.on('line', (input) => {
  n = parseInt(input)
}).on('close', () => {
  result = factorial(n)
  console.log(result)
  process.exit()
})
