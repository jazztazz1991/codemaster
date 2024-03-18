const express = require("express");
const { ExerciseModel } = require("../models/Exercises.js");
const { adminAccess } = require("../utils/Auth.js");

const router = express.Router();

//get all exercises
router.get("/", async (req, res) => {
    try {
        const exercises = await ExerciseModel.find();
        return res.json(exercises)
    } catch (error) {
        console.log(error)
    }
})

//get one exercise 
router.get("/:exerciseId", async (req, res) => {
    const { exerciseId } = req.params;
    console.log(exerciseId);
    try {
        const exercise = await ExerciseModel.findById(exerciseId);

        if (!exercise) {
            return res.json({ message: "Problem not found!" })
        }

        return res.json(exercise);
    } catch (error) {
        console.log(error)
    }
})


//create exercise
router.post("/admin/create", async (req, res) => {
    const { language, title, difficulty, question, solution, test, date, startCode } = req.body;

    const newExercise = await ExerciseModel({
        language,
        title,
        difficulty,
        question,
        solution,
        test,
        startCode,
        date
    })

    await newExercise.save();

    res.json({ message: "Problem set created successfully!" })
})

//delete exercise
router.delete("/admin/:exerciseId", async (req, res) => {
    const { exerciseId } = req.params;

    try {
        const exercise = await ExerciseModel.findOneAndDelete({ _id: exerciseId })

        if (!exercise) {
            return res.json({ message: "Problem not found!" })
        }

        return res.json({ message: "Exercise " + exerciseId + " Deleted" })
    } catch (error) {
        console.log(error);
    }

})

//update exercise
router.put("/admin/:exerciseId", async (req, res) => {
    const { exerciseId } = req.params;
    const { language, title, question, solution, date, test, startCode } = req.body;
    try {
        let updatedExercise = await ExerciseModel.findOneAndUpdate(
            { _id: exerciseId },
            { language, title, question, solution, date, test , startCode},
            { new: true }
        )

        if (!updatedExercise) {
            return res.json({ message: "Problem not found!" })
        }

        return res.json({ message: "Problem was successfully updated!", updatedExercise })
    } catch (error) {
        console.log(error);
    }
})

module.exports = {
    exerciseRouter: router
}