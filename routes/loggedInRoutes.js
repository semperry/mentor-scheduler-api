const express = require("express");
const Router = express.Router();

const LoggedIn = require("../models/loggedInModel");

// Get sessions
Router.route("/").get((req, res) => {
  LoggedIn.find((err, sessions) => {
    if (sessions) {
      res.status(200).json(sessions);
    } else {
      res.status(404).send(`GET Users error: ${err}`);
    }
  });
});

// Get one by session
Router.route("/:id").get((req, res) => {
  LoggedIn.findOne({ session: req.params.id }, (err, session) => {
    if (!session) {
      res.status(404).send("No Session");
    } else {
      res.status(200).json(session);
    }
  });
});

// New
Router.route("/new").post((req, res) => {
  const session = new LoggedIn(req.body);

  session
    .save()
    .then(session => {
      res.status(200).json(session);
    })
    .catch(err => {
      res.status(400).send(`post error: ${err}`);
    });
});

// Delete Session
Router.route("/delete/:id").delete((req, res) => {
  LoggedIn.findOneAndDelete({ session: req.params.id }, (err, session) => {
    if (!session) {
      res.status(404).send("session does not exist");
    } else {
      res.send("Successfully deleted");
    }
  });
});

module.exports = Router;
