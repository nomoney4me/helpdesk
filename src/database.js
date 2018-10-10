const knex = require('knex')({
              client: 'sqlite3',
              connection: {
                filename: './database.db'
              }
            })

let database = {
  build: () => {
    return buildTable('tickets')
  },
}

let buildTable = (name) => {
  return knex.schema.hasTable(name).then(exists => {
    if(!exists) {
      process.stdout.write(`${name} does not exist...building...`)
      return knex.schema.createTable(name, table => {
        table.increments('id').index.unique
      }).then(() => {
        console.log('building completed!')
      })
    }
  })
  .catch(e => {
    throw e
  })
}

module.exports = database;