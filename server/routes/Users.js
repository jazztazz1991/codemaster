const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { UserModel } = require('../models/Users.js');
const { ExerciseModel } = require('../models/Exercises.js');

const router = express.Router();

router.post("/register", async (req, res) => {
    const { username, password, admin } = req.body;

    const user = await UserModel.findOne({ username });

    if (user) {
        return res.json({ message: "User already exists!" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new UserModel({
        username,
        password: hashedPassword,
        admin: false
    })
    await newUser.save();

    res.json({ message: "User Registered Successfully!" });
});

router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });

    if (!user) {
        return res.json({ message: "Username or Password is incorrect!" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
        return res.json({ message: "Username or Password is incorrect!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.SECRET);
    res.json({ token, userID: user._id });

});


//save exercise
router.post("/:userId/:exerciseId", async (req, res) => {
    const { userId, exerciseId } = req.params;

    const user = await UserModel.findById(userId);
    if (!user) {
        return res.json({ message: "No User Found!" })
    }

    const exercise = await ExerciseModel.findById(exerciseId)
    if (!exercise) {
        return res.json({ message: "Problem not found!" })
    }

    user.savedExercises.push(exercise);
    await user.save();

    res.json({ message: "Exercise successfully saved!" })
})


router.get("/profile/:userId", async (req, res) => {
    const { userId } = req.params;
    // console.log("userId", userId)

    try {
        const user = await UserModel.findById(userId)
        // const user = await UserModel.findById(userId).populate("savedExercises");
        if(!user){
            return res.json({ message: "No User Found!" })
        }

        const userProfile = {
             userId: user._id,
             username: user.username,

            //  savedExercises: user.savedExercises
        }

        return res.json(userProfile)

    } catch (error) {
        console.log(error)
    }
})


module.exports = {
    userRouter: router
}
