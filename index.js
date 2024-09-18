const inquirer = require('inquirer')
const { writeFile } = require('fs/promises')
const { createSvg } = require('./lib/shapes.js')

inquirer
    .prompt([
        {
            type: 'maxlength-input',
            message: 'enter up to 3 characters for your logo',
            name: 'text',
            maxLength: 3
        },
        {
            type: 'input',
            message: 'type the name of the color or hexadecimal number for the text color',
            name: 'textColor'
        },
        {
            type: 'list',
            message: 'select the shape for your logo',
            name: 'shape',
            choices: ['triangle', 'circle', 'square']
        },
        {
            type: 'input',
            message: 'type the name of the color or hexadecimal number for the background color',
            name: 'bgColor'
        }
    ])
    .then(({ text, textColor, shape, bgColor }) => {
        writeFile(`${text}.svg`, createSvg({ text, textColor, shape, bgColor }), (err) =>
            err ? console.logg(err) : console.log('successfully created svg file')
        )
    })
