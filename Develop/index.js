// packages needed for this application
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please describe your project:',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter the installation instructions for your project:',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter the usage information for your project:',
        name: 'usage',
      },
      {
        type: 'list',
        message: 'Select the license for your project:',
        name: 'license',
        choices: ['Apache', 'BSD', 'Perl', 'GNU', 'MIT'],
      },
      {
        type: 'input',
        message: 'Give instructions on how to contribute to this project:',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Give instructions on testing your project:',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Give instructions on how to reach you with additional questions:',
        name: 'questions',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
      },
      {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Your README.md file has been generated")
    });
}



// initialize app
async function init() {
    const writeFileAsync = util.promisify(writeToFile);
    try {
        const userInput = await inquirer.prompt(questions);

        const userReadme = generateMarkdown(userInput);

        await writeFileAsync('userREADME.md', userReadme);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();
