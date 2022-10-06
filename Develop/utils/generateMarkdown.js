const fs = require(`fs`);
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (!license) {
    return '';
  }
  return `[![${license} license](https://img.shields.io/badge/License-${license}-blue.svg)](${renderLicenseLink(
    license
  )})`;
};

// If there is no license, return an empty string
const renderLicenseLink = (license) => {
  if (license === `MIT`) {
    return `https://opensource.org/licenses/MIT`;
  }
  if (license === `Apache`) {
    return `https://opensource.org/licenses/Apache-2.0`;
  }
  if (license === `GPL`) {
    return `https://opensource.org/licenses/GPL-3.0`;
  }
  if (license === `BSD`) {
    return `https://opensource.org/licenses/BSD-3-Clause`;
  }
  return ``;
};

// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (!license) {
    return ``;
  }
  return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`;
};

function generateMarkdown(data) {
  return `# ${data.title}
  
  ${renderLicenseBadge(data.licenses)}
  
  ## Table of Contents
  * [Description](#description)
  * [Licenses](#licenses)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  
  ## Description
  ${data.description}
  
  ${renderLicenseSection(data.licenses)}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  If you have any questions, please contact me at 
  ${data.email} or visit my GitHub page at [${data.github}]

  ## Credits
  ${data.credits}
  `;
}

module.exports = generateMarkdown;
