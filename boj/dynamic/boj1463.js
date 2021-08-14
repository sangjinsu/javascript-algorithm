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
  let dp = new Array(num + 1).fill(999)
  dp[0] = 0
  dp[1] = 0
  for (let i = 2; i <= num; i++) {
    if (i % 3 == 0) {
      dp[i] = Math.min(dp[i / 3] + 1, dp[i])
    }

    if (i % 2 == 0) {
      dp[i] = Math.min(dp[i / 2] + 1, dp[i])
    }

    dp[i] = Math.min(dp[i - 1] + 1, dp[i])
  }
  console.log(dp[num])
  exit()
})
