const express = require("express");
const router = express.Router();
const { getExpectedOutputs } = require("../tests/expectedOutput")

router.post("/test", async (req, res) => {
console.log("this is req.body", req.body)

    const { text , test  } = req.body;
    console.log("text:", text)
    console.log("test:", test)

    if(!text) {
        return res.json({ message: "No code provided to test"})
    }
    try{
        const expectedOutputs = getExpectedOutputs()
        // console.log("this is the expected outputs:", expectedOutputs)

        let matchingExpectedOutcome; 

        if (expectedOutputs.hasOwnProperty(test)) {
            matchingExpectedOutcome = test;
            // console.log("matching outcome name?", matchingExpectedOutcome);
        } 

        const expectedOutput = expectedOutputs[test];
        // console.log("expectedOutput",expectedOutput)

        const userInput = text.replace(/\s+|;\s*(?!})/g, "").trim();
        const solution = expectedOutput.replace(/\s+|;\s*(?!})/g, "").trim();
        
        console.log("userinput:", userInput)
        console.log("solution:", solution)
        
        let message;
        if (userInput === solution) {
            message = "Accepted";
        } else {
            message = "Wrong Answer";
        }

        return res.json({ message, expectedOutput, receivedInput: text, message });
    } catch(error){
        console.log(error)
        return res.status(500).json({ message: "Internal server error" });
    }
})

module.exports = { testRouter: router}
