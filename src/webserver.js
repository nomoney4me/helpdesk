const express = require('express')
      , ws = require('express-ws')
      , bodyParser = require('body-parser')
      , Promise = require('bluebird')
      , session = require('express-session')
      , app = express()
      , routes = require('./routes')

let middleware = (req, res, next) => {
  next()
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded())

// # routes for api
app.use('/api', middleware, require('./api'))

let webserver = {
  init: () => {
    app.listen(3000, console.log('listening on 3000...'))
  }
}


module.exports = webserver;
