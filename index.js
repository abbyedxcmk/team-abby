const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

//create an empty array called team
let team = [];

// create questions object for inquirer
const questions = {
    manager: [
        {
            type: 'input',
            name: 'name',
            message: "What is the team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the team manager's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the team manager's office number?",
        },
    ],
    engineer: [
        {
            type: 'input',
            name: 'name',
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the engineer's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the engineer's email?",
        },
        {
            type: 'input',
            name: 'github',
            message: "What is the engineer's GitHub username?",
        },
    ],
    intern: [
        {
            type: 'input',
            name: 'name',
            message: "What is the intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the intern's id?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the intern's email?",
        },
        {
            type: 'input',
            name: 'school',
            message: "What is the intern's school?",
        },
    ],
}

function initApp() {
    addmanager();
}

function addmanager() {
// use iniqurer to prompt user for manager info and create a new manager object
let manager;
inquirer.prompt(questions.manager).then((answers) => {
    manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    team.push(manager);
  });
}
