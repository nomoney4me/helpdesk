const config = require('../config')
      , mysql = require('mysql')
      , knex = require('knex')({
          client: 'mysql',
          connection: config.knex
        })

let database = {
  test: () => {
    let connection = mysql.createConnection(config.knex)
    connection.connect(e => {
      if(e) console.error(`Unable to connect to DB`)
      else connection.end()
    })
  }
}

module.exports = database;