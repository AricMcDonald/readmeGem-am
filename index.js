// TODO: Include packages needed for this application
const fs = require('fs');
const path = require('path');
const insquirer = require('inquirer'); 
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license is this repo under?',
        choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email to contact about questions?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a brief description about your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the command to run to install necessary dependencies',
        default: 'npm i'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the command to run tests for this repo?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What should a user know in order to use this repo?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What should a user know about contributing to this repo?'
    },
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(userAnswers => {
        console.log(userAnswers)
        writeToFile('README.md', generateMarkdown({...userAnswers}));
    })
}


// Function call to initialize app
init();