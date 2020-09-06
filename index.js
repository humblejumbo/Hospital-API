const express = require('express');
const app = express();
const port = 3000;

const db= require('./config/mongoose');
const passport= require('passport');
const passportJWT = require("./config/passport-jwt-strategy");


app.use(express.urlencoded());
app.use(express.static("./assets"));
app.use(passport.initialize());

//setting route
const indexRoutes = require("./routes/api/v1/index");
app.use("/", indexRoutes);



//server running on port 3000
app.listen(port, function (err) {
  if (err) console.log(`Error: ${err}`);

  console.log(`Server is running on: ${port}`);
});