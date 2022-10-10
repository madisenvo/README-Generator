// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  <h1>${data.title}</h1>

  ## Description
  ${questions.description}

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${questions.installation}

  ## Usage
  ${questions.usage}

  ## License
  ${questions.license}

  ## Contributing
  ${questions.contributing}

  ## Tests
  ${questions.tests}

  ## Questions
  ${questions.questions}

  :octocat: Find me on GitHub: [${questions.username}](https://github.com/${questions.username})<br />
  <br />
  ✉️ Email me: ${questions.email}<br /><br />
  

`;
}

module.exports = generateMarkdown;
