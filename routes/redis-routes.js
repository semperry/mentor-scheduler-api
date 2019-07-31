const express = require("express");
const RedisRouter = express.Router();
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
const redis = require("redis");

const connect = require("../connections");

// POST to create completion flag
// GET to check if flag exists

module.exports = RedisRouter;
