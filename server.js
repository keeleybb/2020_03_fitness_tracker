const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Connecting/Creating my Db
mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));

app.get("/exercise", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/exercise.html");
});

app.get("/stats", (req, res) => {
  res.status(200).sendFile(__dirname + "/public/stats.html");
});

app.get("/", (req, res) => {
  res.status(200).sendFile("index.html");
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
