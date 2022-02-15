// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMD = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Commit logged!'))
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("ReadMe-Generator", generateMD(data))
    })
}

// Function call to initialize app
init();
