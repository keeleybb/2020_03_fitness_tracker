const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const options = { toJSON: { virtuals: true } };

const activitySchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Type should not be empty"
        },
        name: {
          type: String,
          trim: true,
          required: "name should not be empty"
        },
        duration: {
          type: Number,
          required: "Enter a duration in minures"
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
  },
  options
);

activitySchema.virtual("totalDuration").get(function() {
  return this.exercises.reduce((total, { duration }) => {
    return total + duration;
  }, 0);
});

const Activity = mongoose.model("Activity", activitySchema);

module.exports = Activity;
