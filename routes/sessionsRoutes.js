const express = require('express')
const SessionsRouter = express.Router()

// Model
const Sessions = require('../models/sessionsModel')

// GET Daily Sessions
SessionsRouter.route("/sessions").get((req, res) => {
  Sessions.find((err, session) => {
    if( err) {
      console.log(`GET Error: ${err}`);
    } else {
      res.json(session)
    }
  })
})

// POST new session
SessionsRouter.route('/new').post((req, res) => {
  const session = new Sessions(req.body);
  session
    .save()
    .then(session => {
      res.status(200).json(session._id);
    })
    .catch(err => {
      res.status(400).send(err)
    })
})

module.exports = SessionsRouter