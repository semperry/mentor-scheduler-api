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

// GET one session by id
SessionsRouter.route("/:id").get((req, res) => {
  let id = req.params.id;
  Sessions.findById(id, (err, session) => {
    res.json(session);
  });
});

// Update Session
SessionsRouter.route("/update/:id").post((req, res) => {
  Sessions.findById(req.params.id, (err, session) => {
    if (!session) {
      response.status(404).send("session not found");
    } else {
      session.name = req.body.name;
      session.email = req.body.email;
      session.phone = req.body.phone;
      session.assigned = req.body.assigned;
      session.day = req.body.day;
      session.time = req.body.time;
      session.info.notes = req.body.info.notes;
      session.info.hours_studied = req.body.info.hours_studied;
      session.info.weekly_goal = req.body.info.weekly_goal;
      session.info.questions = req.body.info.questions;
      session.completed = req.body.completed;
      session.__v++
      

      session
        .save()
        .then(session => {
          res.json("Updated session successfully" +" " + session);
        })
        .catch(error => {
          res.status(400).send("unable to update the session" +" " + error);
        });
    }
  });
});

module.exports = SessionsRouter