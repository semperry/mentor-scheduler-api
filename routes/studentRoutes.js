const express = require("express");
const StudentRouter = express.Router();

// Model
const Students = require("../models/studentModel");

// GET Daily Sessions
StudentRouter.route("/").get((req, res) => {
  Students.find((err, students) => {
    if (err) {
      res.status(404).send(`GET Error: ${err}`);
    } else {
      res.json(students);
    }
  });
});

// POST new session
StudentRouter.route("/new").post((req, res) => {
  const student = new Students(req.body);
  student
    .save()
    .then(student => {
      res.status(200).json(student._id);
    })
    .catch(err => {
      res.status(400).send(err);
    });
});

// GET one session by id
StudentRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  Students.findById(id, (err, student) => {
    if (err) {
      res.status(404).send(`Get One Error: ${err}`);
    } else {
      res.json(student);
    }
  });
});

// Update Session
StudentRouter.route("/update/:id").post((req, res) => {
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
      session.__v++;

      session
        .save()
        .then(session => {
          res.json("Updated session successfully" + " " + session);
        })
        .catch(error => {
          res.status(400).send("unable to update the session" + " " + error);
        });
    }
  });
});

// DELETE session
StudentRouter.route("/delete/:id").delete((req, res) => {
  Students.findOneAndDelete({ _id: req.params.id }, (err, student) => {
    if (err) {
      res.json("Unable to delete session", err);
    } else {
      res.json("Successfully deleted");
    }
  });
});

module.exports = StudentRouter;
