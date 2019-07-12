require("dotenv").config();
const express = require("express");
const PORT = process.env.PORT || 4000;
const app = express();
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require('mongoose')
const sessionRoutes = require('./routes/sessionsRoutes')


mongoose.Promise = global.Promise;
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('DB Connected!');
    
  })
  .catch(err => {
    console.log(`connection error ${err}`);
    
  })

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use("/", sessionRoutes)


app.listen(PORT, () => {
  console.log(`Server is up on Port ${PORT}`);
});