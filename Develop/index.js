// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: `input`,
    name: `name`,
    message: `Welcome to the README Generator! Please enter your full name?`,
    validate: (nameResponse) => {
      if (nameResponse) {
        return true;
      }
      console.log(`Be proud of your work! Please enter your full name!`);
      return false;
    },
  },
  {
    type: `input`,
    name: `github`,
    message: `Please enter your GitHub username:`,
    validate: (githubResponse) => {
      if (githubResponse) {
        return true;
      }
      console.log(
        `Let people know where to find your work! Please enter your GitHub username!`
      );
      return false;
    },
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
