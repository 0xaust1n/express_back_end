const express = require('express')
const app = express()
const url = 'http://localhost'
const port = 8080

app.get('/', (req, res) => {
  res.send('ELLO')
})

app.listen(port, () => {
  console.log(`[Msg]:Server Succesfuly listen on ${url}:${port}`)
})
