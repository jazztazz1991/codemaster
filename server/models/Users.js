const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    admin: { type: Boolean, required: true },
    savedExercises: [{ type: mongoose.Schema.Types.ObjectId, ref: "ExerciseModel" }]
});

module.exports = {
    UserModel: mongoose.model("users", UserSchema)
}