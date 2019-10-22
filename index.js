const express = require('express')
const app = express()
const port = 15820

app.get('/', (req, res) =>
  res.send('Greetings from narisa...')
)

app.listen(port, () =>
  console.log(`App running on port ${port}.`)
)
