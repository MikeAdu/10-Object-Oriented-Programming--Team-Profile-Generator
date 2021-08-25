const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateTeamWebPage = require("./src/generatehtml");
const { listenerCount } = require('events');
const Choice = require('inquirer/lib/objects/choice');
const generatehtml = require('./src/generatehtml');

const employeeArray = []
const managerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is your name?"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your ID"
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your office number "
    },]
const engineerInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is your engineers name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your engineers Id"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your engineers email",
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your engineers GitHib username'
    },]
const internInfo = [
    {
        type: 'input',
        name: 'name',
        message: "What is your interns name"
    },
    {
        type: 'input',
        name: 'id',
        message: "What is your intern ID"
    },
    {
        type: 'input',
        name: 'email',
        message: "What is your interns email address"
    },
    {
        type: 'input',
        name: 'school',
        message: "What school does your intern attend"
    },];
function getManager() {
    inquirer.prompt(managerInfo).then(function (data) {
        console.log(data)
        const manager = new Manager(data.name, data.id, data.email, data.officeNumber)
        employeeArray.push(manager)
        newEmployee()
        //create manger using data 
        // inquirer prompt to see if user want to add another employee or quit 
    })
}
function getEngineer() {
    inquirer.prompt(engineerInfo).then(function (data) {
        const engineer = new Engineer(data.name, data.id, data.email, data.gitHub)
        employeeArray.push(engineer)
        newEmployee()
        //create manger using data 
        // inquirer prompt to see if user want to add another employee or quit 
    })
}
function getIntern() {
    inquirer.prompt(internInfo).then(function (data) {
        const intern = new Intern(data.name, data.id, data.email, data.school)
        employeeArray.push(intern)
        newEmployee()
        //create manger using data 
        // inquirer prompt to see if user want to add another employee or quit 
    })
}
function quit() {
    generateHtml(employeeArray)
    console.log("goodbye")
    console.log(employeeArray)
}
function newEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "option",
            message: "Which employee would you like to add next",
            choices: ["engineer", "intern", "quit"],
        }

    ]).then(function (data){
        if (data.option="engineer") {getEngineer()}
        if (data.option="intern") {getIntern()}
        if (data.option="quit") {quit()}
    })
}
getManager()