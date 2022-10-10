// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter the installation instructions for your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter the usage information for your project.',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Select a license for you application.',
        name: 'license',
        choices: ['MIT', 'Apache 2.0', 'GNU'],
      },
      {
        type: 'input',
        message: 'Enter the contribution guidelines for your project.',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Enter the installation instructions for your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter the itest instructions for your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Give instructions on how to reach you with additional questions.',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'Enter your GitHub username.',
        name: 'username',
      },
      {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
