const router = require("express").Router();
const Activity = require("../models/activities.js");

var date = new Date();
var newdate = new Date(date);
newdate.setDate(newdate.getDate() - 8);

router.post("/api/workouts", function(req, res) {
  Activity.create(req.body)
    .then(dbActivity => res.json(dbActivity))
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  console.log("Adding stuff: ", req.body);
  Activity.updateOne(
    { _id: req.params.id },
    { $push: { exercises: req.body } },
    { new: true, runValidators: true }
  )
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
    // .aggregate({})
    .then(dbActivity => {
      // console.log("dbactivity", dbActivity);
      res.json(dbActivity);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  console.log("here: ", newdate);
  Activity.find({})
    .sort({ day: -1 })
    .limit(7)
    .then(dbActivity => {
      res.json(dbActivity.reverse());
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;

// My previous solution
// router.get("/api/workouts/range", (req, res) => {
//   console.log("This is 8 days ago: ", newdate);
//   Activity.find({
//     day: {
//       $gt: newdate
//     }
//   })
//     .then(dbActivity => {
//       res.json(dbActivity);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
