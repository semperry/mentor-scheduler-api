require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const studentRoutes = require("./routes/studentRoutes");
const userRoutes = require("./routes/userRoutes");
const loginSessionRoutes = require("./routes/loggedInRoutes");
const redisRoutes = require("./routes/redis-routes");

mongoose.Promise = global.Promise;
mongoose.set("useCreateIndex", true);
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(() => {
    console.log("DB Connected!");
  })
  .catch(err => {
    console.log(`connection error ${err}`);
  });

app.disable("x-powered-by");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/students", studentRoutes);
app.use("/mentors", userRoutes);
app.use("/sessions", loginSessionRoutes);
app.use("/redis", redisRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Mentor Scheduler API</h1");
});

app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}`);
});
