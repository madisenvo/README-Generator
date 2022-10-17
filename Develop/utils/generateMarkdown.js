// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  # ${userInput.title}

  ## Description
  ${userInput.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${userInput.installation}

  ## Usage
  ${userInput.usage}

  ## License
  ![license badge](https://img.shields.io/badge/license-${userInput.license}-lightblue.svg)

  ## Contributing
  ${userInput.contributing}

  ## Tests
  ${userInput.tests}

  ## Questions
  ${userInput.questions}

  Find me on GitHub: [${userInput.username}](https://github.com/${userInput.username})
  
  Email me: ${userInput.email}
`;
};

module.exports = generateMarkdown;
