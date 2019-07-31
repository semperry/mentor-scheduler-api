const express = require("express");
const RedisRouter = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const redis = require("redis");

const connect = require("../connections");

// POST to create completion flag
RedisRouter.route("/complete").post((req, res) => {
  connect.createConnection().then(client => {
    const id = req.body.id;
    const complete = true;

    client.hset(id, "complete", complete, redis.print);

    client.hgetall(id, (err, results) => {
      if (results) {
        res.send(results);
      } else {
        res.send(err);
      }
    });

    client.expire(id, 60);

    client.quit((err, reply) => {
      if (!err) {
        console.log(reply);
      } else {
        console.log(err);
      }
    });
  });
});

// GET to check if flag exists
RedisRouter.route("/completed/:id").get((req, res) => {
  connect.createConnection().then(client => {
    client.hgetall(req.params.id, (err, results) => {
      if (results) {
        res.status(200).send("Still complete");
      } else {
        res.status(404).send("Expired");
      }
    });
    client.quit((err, reply) => {
      if (!err) {
        console.log("Get quit response" + reply);
      } else {
        console.log("Get quit error" + err);
      }
    });
  });
});

module.exports = RedisRouter;
