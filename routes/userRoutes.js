const express = require("express");
const UserRouter = express.Router();
const bcrypt = require("bcrypt");
const uuidv1 = require("uuid/v1");
const uuidv4 = require("uuid/v4");

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

// Get one
UserRouter.route("/:id").get((req, res) => {
  Users.findById(req.params.id, (err, user) => {
    if (err) {
      res.status(404).send(`Mentor not found: ${err}`);
    } else {
      res.json(user);
    }
  });
});

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
UserRouter.route("/email").post((req, res) => {
  Users.findOne({ email: req.body.email }, (err, user) => {
    if (!user) {
      return res.status(404).send(`Mentor not found: ${err}`);
    } else {
      return res.status(200).json({
        id: user._id,
        email: user.email,
        role: user.role,
        first_name: user.first_name,
        last_name: user.last_name,
        week_one: user.week_one,
        week_two: user.week_two
      });
    }
  }).catch(err => {
    console.log("find email err: " + err);
  });
});

// Post new
UserRouter.route("/new").post((req, res) => {
  const user = new Users(req.body);
  const password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
      user.password = hash;
      (user.week_one = [
        {
          sunday: {
            start: "",
            end: ""
          },
          monday: {
            start: "",
            end: ""
          },
          tuesday: {
            start: "",
            end: ""
          },
          wednesday: {
            start: "",
            end: ""
          },
          thursday: {
            start: "",
            end: ""
          },
          friday: {
            start: "",
            end: ""
          },
          saturday: {
            start: "",
            end: ""
          }
        }
      ]),
        (user.week_two = [
          {
            sunday: {
              start: "",
              end: ""
            },
            monday: {
              start: "",
              end: ""
            },
            tuesday: {
              start: "",
              end: ""
            },
            wednesday: {
              start: "",
              end: ""
            },
            thursday: {
              start: "",
              end: ""
            },
            friday: {
              start: "",
              end: ""
            },
            saturday: {
              start: "",
              end: ""
            }
          }
        ]);

      user
        .save()
        .then(user => {
          res.status(200).json(user);
        })
        .catch(err => {
          res.status(201).send(`post error: ${err}`);
        });
    });
  });
});

// ADDED vvv

// UPDATING A USER
UserRouter.route("/update/:id").post((request, response) => {
  Users.findById(request.params.id, (error, user) => {
    if (!user) response.status(404).send("data is not found");
    else user.email = request.body.email;
    user.password = request.body.password;
    user.first_name = request.body.first_name;
    user.last_name = request.body.last_name;
    user.role = request.body.role;
    user.week_one = request.body.week_one;
    user.week_two = request.body.week_two;

    user
      .save()
      .then(user => {
        response.json("user updated!");
      })
      .catch(error => {
        response.status(400).send("Update not possible");
      });
  });
});

// Login ADDED WK 1 WK 2
UserRouter.route("/login").post((req, res) => {
  Users.findOne({ email: req.body.email })
    .then(user => {
      if (!user) {
        return res.status(404).send("Email not found");
      } else {
        bcrypt.compare(req.body.password, user.password, (err, result) => {
          if (result) {
            const newSession = uuidv4() + uuidv1();
            res.status(200).json({
              id: user._id,
              email: user.email,
              role: user.role,
              first_name: user.first_name,
              last_name: user.last_name,
              week_one: user.week_one,
              week_two: user.week_two,
              session_id: `${newSession}`
            });
          } else {
            res.status(404).send("password does not match " + err);
          }
        });
      }
    })
    .catch(err => {
      res.send("login error: " + err);
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
