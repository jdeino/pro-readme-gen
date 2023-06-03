// TODO: Include packages needed for this application
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs')
var inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project.',
    },
    {
        type: "input",
        name: "contribution",
        message: "Please provide contribution guidelines for your project.",
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide test instructions for your project.",
      },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use for your project?',
        choices: ["MIT", "GNU GPLv3", "Apache License 2.0", "ISC License"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

function writeToFile (answers)  {fs.writeFile('./readMe.md', generateMarkdown(answers), err => {
    if (err) throw err;
      console.log('Readme complete');
   });
  }

  function init() {
    inquirer.prompt(questions)
       
    .then((answers)=>{
        console.log("from index")
        console.log(answers)
        generateMarkdown(answers)
        writeToFile(answers)
    })
}

init()