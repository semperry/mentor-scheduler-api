const express = require("express");
const CompleteRouter = express.Router();

const CompletedModel = require("../models/completedModel");

// POST to create completion flag
CompleteRouter.route("/complete").post((req, res) => {
  const completed = new CompletedModel(req.body);

  completed
    .save()
    .then(completed => {
      res.status(200).json(completed);
    })
    .catch(err => {
      res.status(400).send(`post error: ${err}`);
    });
});

// GET to check if flag exists
CompleteRouter.route("/:id").get((req, res) => {
  CompletedModel.findOne({ id: req.params.id }, (err, session) => {
    if (!session) {
      res.status(404).send("No Session");
    } else {
      res.status(200).json(session);
    }
  });
});

// GET to check all
CompleteRouter.route("/").get((req, res) => {
  CompletedModel.find((err, sessions) => {
    if (sessions) {
      res.status(200).json(sessions);
    } else {
      res.status(404).send(`GET Users error: ${err}`);
    }
  });
});

module.exports = CompleteRouter;
