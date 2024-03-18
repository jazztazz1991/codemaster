const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema({
    language: { type: String, required: true },
    title: { type: String, required: true },
    difficulty: { type: String, required: true },
    question: { type: String, required: true },
    solution: { type: String },
    test: { type: String, required: true },
    startCode: { type: String },
    date: { type: Date, default: Date.now }
})

module.exports = {
    ExerciseModel: mongoose.model("exercises", ExerciseSchema)
}