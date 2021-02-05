const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema ({
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
                required: "Enter duration of exercise"
            },
            weight: {
                type: Number,
                required: "Enter the your weight used in the exercise"
            },
            reps: {
                type: Number,
                required: "Enter the amount of reps performed"
            },
            sets: {
                type: Number,
                required: "Enter the amount of sets performed"
            }
        }
});

const Fitness = mongoose.model("Fitness", fitnessSchema);

module.exports = Fitness;