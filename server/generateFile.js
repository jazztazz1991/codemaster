const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");

const codeDirectory = path.join(__dirname, "codes")

if(!fs.existsSync(codeDirectory)) {
    fs.mkdirSync(codeDirectory, {recursive: true})
}

const generateFile = async ( language, content) => {
    const exerciseId = uuid();
    const fileName = `${exerciseId}.${language}`
    const filePath = path.join(codeDirectory, fileName) 
    await fs.writeFileSync(filePath, content);
    return filePath;
}



module.exports = { generateFile }