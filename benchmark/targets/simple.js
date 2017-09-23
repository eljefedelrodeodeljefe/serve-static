const express = require('express')
const path = require('path')
const serveStatic = require('../../')

const app = express()

app.use(serveStatic(path.join(__dirname, 'fixtures')))

app.listen(3000, () => {
  process.send('ready')
})
