const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const activitySchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String
      },
      name: {
        type: String
      },
      duration: {
        type: Number
      },
      weight: {
        type: Number
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      },

      distance: {
        type: Number
      }
    }
  ]
});

// activitySchema.virtual("totalDuration").get(function() {
//   console.log("anyone: ", this.exercise.duration.reduce());
//   return this.exercises;
// });

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;

// const activitySchema = new Schema({
//   day: {
//     type: Date,
//     default: Date.now
//   },
//   exercises: [
//     {
//       type: {
//         type: String
//       }
//     },
//     {
//       name: {
//         type: String
//       }
//     },
//     {
//       duration: {
//         type: Number
//       }
//     },
//     {
//       weight: {
//         type: Number
//       }
//     },
//     {
//       reps: {
//         type: Number
//       }
//     },
//     {
//       sets: {
//         type: Number
//       }
//     },
//     {
//       distance: {
//         type: Number
//       }
//     }
//   ]
// });
