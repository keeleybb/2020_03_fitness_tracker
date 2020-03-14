const router = require("express").Router();
const Activity = require("../models/activities.js");

var date = new Date();
var newdate = new Date(date);
newdate.setDate(newdate.getDate() - 7);

router.post('/api/workouts', function(req, res){
  console.log("what is in my body?", req.body);
  Activity.create(req.body)
  .then(dbActivity => res.json(dbActivity))
  .catch(err => {
    res.status(400).json(err);
  });
})

router.put("/api/workouts/:id", (req, res) => {
  console.log("Adding stuff: ", req.body);
    Activity.updateOne({_id:req.params.id}, {$push: {exercises:req.body}})
      .then(dbActivity => {
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts", (req, res) => {
    Activity.find({})
    .sort({ date: 1 })
    // .aggregate([{$group : {_id : "$exercises.duration", totalDuration : {$sum : 1}}}])
      .then(dbActivity => {
        console.log("dbactivity", dbActivity);
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  router.get("/api/workouts/range", (req, res) => {
    console.log("here", newdate);
    console.table()
    Activity.find({
      "day": 
      {
          $gte: newdate
      }
  })
      .then(dbActivity => {
        console.log("Data for charts: ", dbActivity)
        res.json(dbActivity);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;

  // {day: {$gte: req.start, $lte: req.end}}
  // {$range: {$currentDate, {$currentDate - 5}}}