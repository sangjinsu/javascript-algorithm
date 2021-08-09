const { stdin, stdout, exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

function getZeroInFactorial(n) {
  let num = BigInt(1)
  for (let i = 1; i <= n; i++) {
    num *= BigInt(i)
  }

  let numStr = num.toString()
  let result = 0
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] !== '0') {
      break
    }
    result++
  }
  return result
}

let n = 0
rl.on('line', (input) => {
  n = parseInt(input.trim())
  rl.close()
}).on('close', () => {
  let result = getZeroInFactorial(n)
  console.log(result)
  exit()
})
