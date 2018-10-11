const config = require('../../config')
      , moment = require('moment')
      , knex = require('knex')({
        client: 'mysql',
        connection: config.knex
      })


let db_functions = {
  get_ticket: (id) => {
    return knex('users').select([
      'tickets.*', 'users.*', 'tickets_thread.*'
    ])
    .innerJoin('tickets', 'tickets.owner', 'users.id')
    .rightJoin('tickets_thread', 'tickets.id', 'tickets_thread.ticket_id')
    .orderBy('tickets_thread.date_created', 'desc')
    .where('users.id', id)
    .catch(e => {throw e})
  },

  post_ticket: (data) => {
    let now = moment().format('YYYY-MM-DD HH:mm:ss')
    return knex('tickets').insert({
      subject: data.subject,
      notes: data.notes,
      owner: data.owner,
      status: data.status,
      date_created: now,
      date_modified: now,
    }).catch(e => {throw e})
  },

  post_thread: (data) => {
    let now = moment().format('YYYY-MM-DD HH:mm:ss')
    return knex('tickets_thread').insert({
      ticket_id: data.ticket_id,
      owner: data.owner,
      message: data.message,
      attachment: data.attachment,
      date_created: now,
      date_modified: now,
    }).catch(e => {throw e})
  },

  find_user: (fullname) => {
    return knex('users').select().where('fullname', 'like', `%${fullname}%`)
  }
}

// # testing functions

//   db_functions.get_ticket(1)

//   db_functions.post_ticket({
//     subject:'testing',
//     notes:'some notes goes here',
//   })
db_functions.post_thread({
  ticket_id: 2,
  owner: 1,
  message: `this is a test thread`,
  attachment: `attachment.txt`,
})
.then(data => {
  console.log(data)
})
.catch(e => {
  console.error(e.sqlMessage)
})

module.exports = db_functions