require('./database.config.js')('mongodb://localhost/test')
const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.post('/register', (req, res) => {
  res.sendStatus(200)
})

consign({
  cwd: 'src',
  locale: 'pt-br',
  verbose: true,
  logginType: 'info'
}).include('models').then('controllers').then('routes').into(app)

app.listen(process.env.PORT || 8081)
