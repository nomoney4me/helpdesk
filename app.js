const webserver = require('./src/webserver')
      , database = require('./src/database')

database.test()
webserver.init()

