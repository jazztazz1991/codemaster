const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const { userRouter } = require('./routes/Users.js');
const { exerciseRouter } = require("./routes/Exercises.js");
const { testRouter } = require("./routes/submit.js");

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/auth", userRouter);
app.use("/problemset", exerciseRouter)
app.use("/api", testRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/'));
});

mongoose.connect(process.env.DB_LINK);
if (process.env.PORT) {
    app.listen(process.env.PORT, () => console.log("SERVER STARTED!"));
}

