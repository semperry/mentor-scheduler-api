const express = require("express");
const UserRouter = express.Router();

const Users = require("../models/userModel");

// Get all
UserRouter.route("/").get((req, res) => {
  Users.find((err, users) => {
    if (users) {
      res.json(users);
    } else {
      res.status(404).send(`GET Users error: ${err}`);
    }
  });
});

// // Get one
// UserRouter.route("/:id").get((req, res) => {
//   Users.findById(req.params.id, (err, user) => {
//     if (err) {
//       res.status(404).send(`Mentor not found: ${err}`);
//     } else {
//       res.json(user);
//     }
//   });
// });

// find one by name
UserRouter.route("/search-name").post((req, res) => {
  Users.findOne(
    { first_name: req.body.first_name, last_name: req.body.last_name },
    (err, user) => {
      if (err) {
        res.status(404).send(`Mentor not found: ${err}`);
      } else {
        res.send(user._id);
      }
    }
  );
});

// Get one by email
UserRouter.route("/email/:email").get((req, res) => {
  Users.findOne({ email: req.params.email }, (err, user) => {
    if (!user) {
      return res.status(404).send(`Mentor not found: ${err}`);
    } else {
      return res.status(200).json({
        id: user._id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
        assigned_sessions: user.assigned_sessions
      });
    }
  }).catch(err => {
    console.log("find email err: " + err);
  });
});

// Post
UserRouter.route("/new").post((req, res) => {
  const user = new Users(req.body);
  user
    .save()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(400).send(`post error: ${err}`);
    });
});

// Put

// Login
UserRouter.route("/login").post((req, res) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).send("Email not found");
      } else if (req.body.password === user.password) {
        return res.status(200).json({
          id: user._id,
          email: user.email,
          role: user.role,
          first_name: user.first_name,
          last_name: user.last_name,
          assigned_sessions: user.assigned_sessions
        });
      }
    })
    .catch(err => {
      res.status(400).send("login error: " + err);
    });
});

// Delete mentor
UserRouter.route("/delete/:id").delete((req, res) => {
  Users.findOneAndDelete({ _id: req.params.id }, (err, user) => {
    if (!user) {
      res.status(404).send("user does not exist");
    } else {
      res.send("Successfully deleted");
    }
  });
});

module.exports = UserRouter;
