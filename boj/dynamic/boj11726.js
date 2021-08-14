const { stdin, stdout, exit } = require('process')
const readline = require('readline')
const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const inputs = []
rl.on('line', (input) => {
  inputs.push(+input)
  rl.close()
}).on('close', () => {
  let num = inputs[0]

  if (num == 1) {
    console.log(1)
    exit()
  }

  let dp = []
  dp.length = num + 1
  dp[0] = 1
  dp[1] = 1

  for (let i = 2; i <= num; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 10007
  }
  console.log(dp[num])
  exit()
})
