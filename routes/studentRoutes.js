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

// Assign Session
StudentRouter.route("/assign-to/:id").put((req, res) => {
  Students.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        assigned_to: req.body.assigned_to,
        assigned_by: req.body.assigned_by
      }
    },
    {
      upsert: false
    },
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.send("assigned to: " + " " + req.body.assigned_to);
      }
    }
  );
});

// Archive Flag
StudentRouter.route("/archive/:id").put((req, res) => {
  Students.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        archived: req.body.archived
      }
    },
    {
      upsert: false
    },
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.send("assigned to: " + " " + req.body.assigned_to);
      }
    }
  );
});

// Change complete boolean
StudentRouter.route("/completed/:id").put((req, res) => {
  Students.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        assigned_to: req.body.assigned_to,
        last_submitted_by: req.body.last_submitted_by
      }
    },
    {
      upsert: false
    },
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.send("session completed: " + " " + res.completed);
      }
    }
  );
});

// Change complete boolean
StudentRouter.route("/notes/:id").put((req, res) => {
  Students.findOneAndUpdate(
    { _id: req.params.id },
    {
      $push: {
        info: req.body.info
      }
    },
    {
      upsert: false
    },
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.send("notes added: " + " " + req.body.info);
      }
    }
  );
});

// Put update from new session form
StudentRouter.route("/update-form/:id").put((req, res) => {
  Students.findByIdAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        phone: req.body.phone,
        special_instructions: req.body.special_instructions,
        day: req.body.day,
        time: req.body.time
      }
    },
    {
      upsert: false
    },
    (err, result) => {
      if (err) {
        return res.status(400).send(err);
      } else {
        return res.send("succesfully updated: " + " " + result);
      }
    }
  );
});

// DELETE session
StudentRouter.route("/delete/:id").delete((req, res) => {
  Students.findOneAndDelete({ _id: req.params.id }, (err, student) => {
    if (err) {
      res.json("Unable to delete session", err);
    } else {
      res.json("Successfully deleted" + " " + student);
    }
  });
});

module.exports = StudentRouter;

// Update Session
// StudentRouter.route("/update/:id").post((req, res) => {
//   Students.findById(req.params.id, (err, student) => {
//     if (!student) {
//       response.status(404).send("student not found");
//     } else {
//       student.first_name = req.body.first_name;
//       student.last_name = req.body.last_name;
//       student.email = req.body.email;
//       student.phone = req.body.phone;
//       student.course = req.body.course;
//       student.assigned_to = req.body.assigned_to;
//       student.day = req.body.day;
//       student.time = req.body.time;
//       student.special_instructions = req.body.special_instructions;
//       student.info = req.body.info;
//       student.completed = req.body.completed;
//       student.__v++;

//       student
//         .save()
//         .then(student => {
//           res.json("Updated student successfully" + " " + student);
//         })
//         .catch(error => {
//           res.status(400).send("unable to update the student" + " " + error);
//         });
//     }
//   });
// });
