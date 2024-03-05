const express = require("express");
const router = express.Router();


router.post("/test", async (req, res) => {
    const code = req.body;
    console.log(code)

    if(!code.test) {
        return res.json({ message: "No code provided to test!"})
    }
})

module.exports = { testRouter: router}