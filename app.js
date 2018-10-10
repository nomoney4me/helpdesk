const webserver = require('./src/webserver')
      database = require('./src/database')

database.build().then(() => {
  process.stdout.write('db verified, starting webserver...')
  webserver.init()
})
