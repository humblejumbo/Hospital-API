const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hospital-api");

//SETTING UP CONNECTION TO MONGODB

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected to MongoDB");
});

module.exports = db;
