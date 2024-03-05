const mongoose = require("mongoose")

const ExerciseSchema = new mongoose.Schema({
    /* Unsure of this relationship, since users won't be creating their own Exercises 
    */
    //user: { type: mongoose.Schema.Types.ObjectId, ref: "UserModel", required: true },
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