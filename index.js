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
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      </head>
      <body class="thing">
        <div>${response.name}</div>
        <div>${response.loc}</div>
        <div>${response.link}</div>
        <div>${response.git}</div>
      </body>
      </html>`;

    console.log(finalstring);
    
    fs.writeFile("index.html",finalstring,(err) =>
    err ? console.log(err) : console.log('success'));
  });



