const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
      {
        type: String,
        name: String,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number
      }
    ]
});
//   type: {
//     type:String,
//     required: "Pick a route"
//   },
//   sets: {
//     type: Number,
//   },
//   reps: {
//     type: "Number",
//   },
//     duration: {
//     type: Number,
//     },
//     miles: {
//     type: Number,
//     },
//     duration: {
//     type: Number,
//     }
// ]


// const cardioSchema = new Schema({
//     name: {
//         type: String,
//         trim: true,
//         required: "Enter a name for your workout"
//       },
//       miles: {
//         type: Number,
//         required: "Enter number of miles"
//       },
//       duration: {
//         type: Number,
//         required: "Duration in minutes"
//       }
//   });

//   const activitySchema = new Schema({
//     name: {
//       type: String,
//       trim: true,
//       required: "Enter a name for your workout"
//     },
//     sets: {
//       type: Number,
//       required: "Enter number of sets"
//     },
//     reps: {
//       type: Number,
//       required: "Enter number of reps"
//     },
//     duration: {
//       type: Number,
//       required: "Duration in minutes"
//     }
//   });

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;