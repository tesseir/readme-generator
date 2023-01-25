const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'input',
      message: 'What is your location',
      name: 'loc',
    },
    {
      type: 'input',
      message: 'What is your Linkedin',
      name: 'link',
    },
    {
      type: 'input',
      message: 'What is your GitHub',
      name: 'git',
    },
  ])
  .then((response) => {
    const finalstring = `
# ${title}

Github Repo: ${response.repo}

Deployed Page: ${response.page}

## Image of use:

![image of use](${response.image})

## Installation and Usage

${response.usage}

## User Story

```md
${ response.story }
```

## Acceptance Criteria

```md
${ response.acceptance }
```
## License 
      `;

    console.log(finalstring);

    fs.writeFile("readme.md", finalstring, (err) =>
      err ? console.log(err) : console.log('success'));
  });



