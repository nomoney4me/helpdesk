const router = require('express').Router()
      , { get_ticket } = require('../controller/db_functions')

router.post('/', (req, res) => {
  get_ticket(req.body.id).then(rows => res.json(rows))
})

module.exports = router;