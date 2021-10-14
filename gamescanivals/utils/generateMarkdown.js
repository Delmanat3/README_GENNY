// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function to generate markdown for README
// Bundled everything into one function to generate the README.
function generateMarkdown(data) {
  return `
  # Title

  ${data.title}

  # Description

  ${data.description}

  ## Table of Contents

  * [Installation](#install)

  * [Contributers](#contributers)
  
  * [Usage](#usage)

  * [License](#license)

  * [Tests](#tests)

  * [Profile](#profile)

  * [contact](#contact)

  ## Install

  ${data.install}

  ## Contributers

  ${data.contributers}

  ## Usage

  ${data.usage}

  ## License

  ${data.license}

  ![GitHub license](https://img.shields.io/badge/license-${data.license}-green.svg)
  
  ## Tests

  ${data.tests}

  ## Profile

  [github](https://github.com/${data.profile})

  ## Contact
  
  [Contact Me(no plz)](mailto:${data.contact})
`;
}

module.exports = generateMarkdown;
// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)