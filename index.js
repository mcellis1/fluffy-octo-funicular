// import inquirer
const inquirer = require('inquirer')
const { writeFile } = require('fs/promises');
// take user input
inquirer
    .prompt([
        {
            type: 'input',
            message: 'enter up to 3 characters for your logo',
            name: 'text'
        },
        {
            type: 'input',
            message: 'type the name of the color or hexadecimal number for the text color',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'select the shape for your logo',
            name: 'shape'
        },
        {
            type: 'input',
            message: 'type the name of the color or hexadecimal number for the background color',
            name: 'bgColor'
        }
    ])
    .then()
