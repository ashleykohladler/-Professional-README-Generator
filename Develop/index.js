// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

const path = require('path');

// const util = require('util');

// TODO: Create an array of questions for user input
//const questions = [];

inquirer
  .prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
        
      },
      {
        type: 'input',
        name: 'projectName',
        message: 'What is your project name?',
        
      },
      {
        type: 'input',
        name: 'description',
        message: 'What is a short descritption of your project?',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What command should be run to install dependencies?:',
        //this should be defult
      },
      {

        type: 'list',
        name: 'license',
        message: 'What license should your project have?',
        choices: [
          'MIT',
          'Apache2.0',
          'GPL3.0',
          'BSD3',
          'None',

        ]
        //this should be a list
      },
      {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        //this should be defult
      },
      {
        type: 'input',
        name: 'user',
        message: 'What does the user need to know about using this repo?',
        
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to repo?',
        
      },
  ])

  // TODO: Create a function to write README file
//function writeToFile(fileName, data) {}

.then((questions) =>

  fs.writeFile(path.join(process.cwd(), "README.md"), `

  # Project Title 
  ${questions.projectName}

  ## Table of Contents
  1. [Title](#Title)
  2. [Description](#Description)
  3. [Installation](#Installation)
  4. [Usage](#Usage)
  5. [License](#License)
  6. [Contributing](#Contributing)
  7. [Tests](#Tests)
  8. [Questions](#Questions)


  # Description 
  ${questions.description}

  # Installation
  ${questions.installation}

  # Usage
  ${questions.user}

  # License
  ![badge](https://img.shields.io/badge/license-${questions.license}-brightgreen)
  
  # Tests
  ${questions.tests}

  # Questions:
  ## GitHub User name 
  ${questions.name}
  ### To access the website go to https://github.com/ashleykohladler/Professional-README-Generator

  ### Email address 
  ${questions.email}

  # Code
  ![Demo of README](./images/README.gif)
  
  `, (err) =>
        err ? console.log(err) : console.log('Success!'))

    );
    

    
    
    

// TODO: Create a function to initialize app
//function init() {}

// Function call to initialize app
//init();




// create writeFile function using promises instead of a callback function





