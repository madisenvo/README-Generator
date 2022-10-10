// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(userInput) {
  return `
  <h1>${userInput.title}</h1>

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
  ${userInput.license}

  ## Contributing
  ${userInput.contributing}

  ## Tests
  ${userInput.tests}

  ## Questions
  ${userInput.questions}

  Find me on GitHub: [${userInput.username}](https://github.com/${userInput.username})<br />
  <br />
  Email me: ${userInput.email}<br /><br />
`;
};

module.exports = generateMarkdown;
