const express = require('express')
const app = express()
const crypto = require('crypto')
const cron = require('node-cron')

let password = generatePassword();

cron.schedule('0 0 * * *', () => {
  password = generatePassword()
})

app.get('/password', (req, res) => {
  res.send(password)
})

function generatePassword() {
  return crypto.randomBytes(20).toString('hex')
}

app.listen(3000, () => {
  console.log('Server started on port 3000')
})
