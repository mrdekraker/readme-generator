// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
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
  {
    type: `input`,
    name: `email`,
    message: `Please enter your email address:`,
    validate: (emailResponse) => {
      if (emailResponse) {
        return true;
      }
      console.log(
        `Let people know how to contact you! Please enter your email address!`
      );
      return false;
    },
  },
  {
    type: `input`,
    name: `title`,
    message: `Please enter the title of your project:`,
    validate: (titleResponse) => {
      if (titleResponse) {
        return true;
      }
      console.log(
        `Every project requires a response. Please enter the title of your project!`
      );
      return false;
    },
  },
  {
    type: `input`,
    name: `description`,
    message: `Please describe your project:`,
    validate: (descriptionResponse) => {
      if (descriptionResponse) {
        return true;
      }
      console.log(
        `Please describe your project! If you are uncertain, it is always safe to answer what, why, and how. What is your project? Why did you create it? How does it work? If further help is needed, or more specifics are needed, head to the the README Generator GitHub page!`
      );
      return false;
    },
  },
  {
    type: `input`,
    name: `installation`,
    message: `Please describe the installation process for your project:`,
    validate: (installationResponse) => {
      if (installationResponse) {
        return true;
      }
      console.log(`Please describe the installation process for your project!`);
      return false;
    },
  },
  {
    type: `input`,
    name: `usage`,
    message: `Are there instructions required to get your project going? Please describe the usage of your project:`,
    validate: (usageResponse) => {
      if (usageResponse) {
        return true;
      }
      console.log(
        `If there are instructions required to navigate your project, please provide them now:`
      );
      return false;
    },
  },
  {
    type: `input`,
    name: `contributing`,
    message: `How can other contribute to your project? Please describe the contribution guidelines:`,
    validate: (contributingResponse) => {
      if (contributingResponse) {
        return true;
      }
      console.log(
        `Please describe the contribution guidelines for your project:`
      );
      return false;
    },
  },
  {
    type: `input`,
    name: `tests`,
    message: `Please describe the tests for your project:`,
    validate: (testsResponse) => {
      if (testsResponse) {
        return true;
      }
      console.log(`Please describe the tests for your project:`);
      return false;
    },
  },
  {
    type: `confirm`,
    name: `confirmLicense`,
    message: `Would you like to add a license to your project?`,
    default: false,
  },
  {
    type: `list`,
    name: `license`,
    message: `Please select a license for your project:`,
    choices: [`MIT`, `Apache`, `GPL`, `BSD`, `None`],
    when: ({ confirmLicense }) => {
      if (confirmLicense) {
        return true;
      }
      return false;
    },
  },
];

// TODO: Create a function to write README file
const writeToFile = (data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(`./dist/README.md`, data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        mesage: console.log(
          `Success! Navigate to the 'dist' folder to view your README!`
        ),
      });
    });
  });

// TODO: Create a function to initialize app
// function init() {}
const init = () => inquirer.prompt(questions);

// Function call to initialize app
init()
  .then((userInput) => generateMarkdown(userInput))
  .then((readmeInfo) => writeToFile(readmeInfo))
  .catch((err) => console.log(err));
