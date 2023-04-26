const inquirer = require('inquirer');
const { writeFile } = require('fs/promises');
const { createSVG } = require('./svg');

class CLI {
  constructor() {
    
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Input three characters for your logo:',
        },
        {
          type: 'list',
          name: 'shape',
          message: 'Select a logo shape:',
          choices: ['Circle', 'Square', 'Triangle'],
        },
        {
          type: 'input',
          name: 'shapeColor',
          message: 'Input a color or hex-code for your shape:',
        },
        {
          type: 'input',
          name: 'textColor',
          message: 'Input a color or hex-code for your text:',
        },
      ])
      .then((response) => {
        console.log(response.shape);
        return writeFile('./output/logo.svg', createSVG(response.shape, response.shapeColor, response.textColor, response.text));
      })
      .then(() => console.log('Generated logo.svg'))
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}

module.exports = CLI;
