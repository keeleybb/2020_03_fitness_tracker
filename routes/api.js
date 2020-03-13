const router = require("express").Router();
const Activity = require("../models/activities.js");
var path = require("path");
const dirname = "../public"

// router.get("/exercise", (req, res) => {
//     res.status(200).sendFile(dirname + "/exercise.html");
// });

// router.get("/", (req, res) => {
//     console.log("path" + __dirname);
//     res.status(200).sendFile("index.html");
// });


// router.get("/stats", (req, res) => {
//     res.status(200).sendFile("stats.html");
// });

router.post("/api/workouts", ({ body }, res) => {
    Activity.create(body)
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.post("/api/workouts/bulk", ({ body }, res) => {
    Activity.insertMany(body)
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  router.get("/api/workouts", (req, res) => {
    Activity.find({})
      .sort({ date: -1 })
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
  
  module.exports = router;