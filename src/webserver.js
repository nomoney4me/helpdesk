const express = require('express')
      , ws = require('express-ws')
      , bodyParser = require('body-parser')
      , Promise = require('bluebird')
      , session = require('express-session')
      , app = express()
      , routes = require('./routes')

let webserver = {
  init: () => {
    app.use('/', routes)
    app.listen(3000, console.log('listening on 3000...'))
  }
}


module.exports = webserver;
