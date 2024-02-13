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
    addManager();
    addTeamMembers();
    console.log(team);
}

function addManager() {
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

function addTeamMembers() {
    let addMember = true;
    while (addMember) {
        // prompt user to add a team member
        inquirer
            .prompt([
                // menu: ask if they want to add an engineer, intern, or finish the team
                {
                    type: 'list',
                    name: 'addMember',
                    message: 'Would you like to add a team member?',
                    choices: ['Engineer', 'Intern', 'Finish'],
                },
            ])
            .then((answers) => {
                if (answers.addMember === 'Engineer') {
                    inquirer.prompt(questions.engineer).then((answers) => {
                        const engineer = new Engineer(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.github
                        );
                        team.push(engineer);
                    });
                } else if (answers.addMember === 'Intern') {
                    inquirer.prompt(questions.intern).then((answers) => {
                        const intern = new Intern(
                            answers.name,
                            answers.id,
                            answers.email,
                            answers.school
                        );
                        team.push(intern);
                    });
                } else {
                    addMember = false;
                }
            });
    }
}

initApp();
