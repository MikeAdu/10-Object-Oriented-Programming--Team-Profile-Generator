const inquirer = require('inquirer');
const fs = require('fs')
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const { type } = require('os');

const managerInfo = [
    {
        type: 'input',
        name: 'ManagerName',
        message: "What is your name?"
    },
    {
        type: 'input',
        name: 'ManagerId',
        message: "What is your ID"
    },
    {
        type: 'input',
        name: 'MangerEmail',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: 'ManagerOfficeNumber',
        message: "What is your office number "
    },]
const engineerInfo = [
    {
        type: 'input',
        name: 'EngineerName',
        message: "What is your engineers name"
    },
    {
        type: 'input',
        name: 'EngineerId',
        message: "What is your engineers Id"
    },
    {
        type: 'input',
        name: 'EngineersEmail',
        message: "What is your engineers email",
    },
    {
        type: 'input',
        name: 'EngineersGitHubUsername',
        message: 'What is your engineers GitHib username'
    },]
const internInfo = [
    {
        type: 'input',
        name: 'InternName',
        message: "What is your interns name"
    },
    {
        type: 'input',
        name: 'InternId',
        message: "What is your intern ID"
    },
    {
        type: 'input',
        name: 'InternEmailAddress',
        message: "What is your interns email address"
    },
    {
        type: 'input',
        name: 'InternSchool',
        message: "What school does your intern attend"
    },];

