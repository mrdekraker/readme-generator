const renderLicenseBadge = (license) => {
  // render license badge
  if (license === `MIT`) {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === `Apache`) {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  }
  if (license === `GPL`) {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  if (license === `BSD`) {
    return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
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
  
  ${renderLicenseBadge(data.license)}
  
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
  ${data.email} or visit my GitHub page at my [${
    data.github
  }](https://github.com/${data.github}]).

  ## Credits
  ${data.credits}
  `;
}

module.exports = generateMarkdown;
