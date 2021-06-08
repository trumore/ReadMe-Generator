// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project/application?",
        name: "Title",
    },
    {
        type: "input",
        message: "Give a description of the purpose of your project/application.",
        name: "description",
    },
    {
        type: "input",
        message: "Are there any required installation instructions?",
        name: "install",
    },
    {
        type: "input",
        message: "Are there any contributors on the project you would like to acknowledge?",
        name: "contributors",
    },
    {
        type: "input",
        message: "Are there any tests for your application? If so, describe them here:",
        name: "test"
    },
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "Github",
    },
    {
        type: "input",
        message: "What is a good email address to contact you at?",
        name: "email",
    },


])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
