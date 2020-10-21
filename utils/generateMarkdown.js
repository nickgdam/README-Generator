const renderLicenseBadge = (license) => {
  if (license!=="None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  else return ''
}

const renderLicenseLink = (license) => {
  if (license!=="None") {
    return(
      `\n* [license](#license)\n`
    )
  }
  else return ''
}

const renderLicenseSection = (license) => {
  if (license !== "None") {
    return ( 
      `## License 
      This app is licensed under ${license}.`
    )
  }
  else return ''
}
// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

* [Installation](#installation)

* [Usage](#usage)
${renderLicenseLink(data.license)}

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)




## Installation

This app requires that you install dependencies.  Here's what you need to know:  

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributors

 ${data.contributors}

 ## Tests

 To run a test, use this command:  

 ${data.test}

 If you have any questions about this repository feel free to contact me at ${data.email}.

 ## Personal GitHub account 

 You can find more of my work on my personal GitHub account.  Just follow the link!  (https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
