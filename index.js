// required installs
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"

    },
    {
        type: "input",
        name: "email",
        message: "What is your email?"
    },
    {
        type: "input",
        name: "title",
        message: "What is the name of this application?"
    },
    {
        type: "input",
        name: "description",
        message: "Please type a description of the Application."
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license are you using?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to test",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },{
        type: "input",
        name: "contributors",
        message: "Who contributed to this repo?",
    },
    
];

// function to write README file
const writeToFile = (fileName, data) => {
    return fs.writeFileSync(path.join(process.cwd(), fileName),data);
}

// function to initialize program
const init = () => {
    inquirer.prompt(questions)
    .then((inquirerResponses)=> {
        console.log("Creating your README.md");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })

}
// function call to initialize program
init();
