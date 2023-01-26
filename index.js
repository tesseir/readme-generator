const inquirer = require('inquirer');
const fs = require("fs");
const { info } = require('console');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'enter project title:',
    },
    {
      type: 'input',
      name: 'repo',
      message: 'enter repo url:',
    },
    {
      type: 'input',
      name: 'page',
      message: 'enter deployed page url:',
    },
    {
      //! i prefer to link my images through the url, not through a file. 
      type: 'input',
      name: 'image',
      message: 'enter image url:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'enter description (use "\n" for a new line):',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'enter installation and usage info (use "\n" for a new line):',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'enter credits (use "\n" for a new line):',
    },
    {
      type: 'list',
      name: 'license',
      message: 'pick a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0'],
    },
    {
      type: 'input',
      name: 'contact',
      message: 'enter contact info (use "\n" for a new line):',
    },


  ])
  .then((response) => {
    const finalstring = `
# ${response.title} 
![License](https://img.shields.io/badge/License-${response.license}-blue.svg)

Github Repo: ${response.repo}

Deployed Page: ${response.page}

## Table of Contents

-[Image](#Image)
-[Installation](#Installation)
-[Credits](#Credits)
-[License](#License)
-[Contact](#Contact)

## Image of use:

![image of use](${response.image})

## Description

${response.description}

## Installation and Usage

${response.usage}

## Credits

${response.credits}

## License

This project is licensed under the ${response.license} license. ![License](https://img.shields.io/badge/License-${response.license}-blue.svg)   

## Contact me

${response.contact}
`;

    console.log(finalstring);

    fs.writeFile("generated.md", finalstring, (err) =>
      err ? console.log(err) : console.log('success'));
  });



