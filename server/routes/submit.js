const express = require("express");
const router = express.Router();
const { runCLI } = require('jest');
const { generateFile } = require("../generateFile")

router.post("/test", async (req, res) => {

    const { text } = req.body;
    console.log("text:", text)

    if(!text) {
        return res.json({ message: "No code provided to test"})
    }
    try{
        const filePath = await generateFile("js", text )
        // console.log("file path", filePath)

        const jestConfig = {
            "testMatch": ["**/code.test.js"], 
        }

        const { results } = await runCLI(jestConfig, [process.cwd()])
        console.log("results:", results)

        return res.json({ filePath, testResults: results})
    
    } catch(error){
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = { testRouter: router}