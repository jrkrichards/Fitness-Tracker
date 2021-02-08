const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema ({
        day: {
            type: Date,
            default: Date.now
        },
        exercises: {
            type: {
                type: String,
                lowercase: true,
                trim: true,
                required: "Enter a excercise type"
            },
            name: {
                type: String,
                lowercase: true,
                trim: true,
                required: "Enter a excercise name"
            },
            duration: {
                type: Number,
                required: "Enter a duration"
            },
            weight: Number,
            reps: Number,
            sets: Number,
            distance: Number 
        }
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;