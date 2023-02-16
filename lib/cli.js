const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { newShape } = require('./newShape');

class CLI {
  constructor() {
    this.text = '';
    this.textColor = '';
    this.shape = '';
    this.shapeColor = ''
  }
  run() {
    return inquirer
      .prompt([
        {
          type: 'input',
          message: 'Please enter the text for your logo (must be 3 characters or less)',
          name: 'text',
        },{
          type: 'input',
          message: 'Please enter a color for the text. Can be the color as its spelled, or a hexadecimal number',
          name: 'textColor',
        },{
          type: 'list',
          choices: ['Circle', 'Square', 'Triangle'],
          message: 'Select a shape.',
          name: 'shape',
        },{
          type: 'input',
          message: 'Please enter a color for your shape. Can be the color as its spelled, or a hexadecimal number',
          name: 'shapeColor',
        },
      ]) 
      .then((answers) => {
        console.log(JSON.stringify(answers))
        console.log("Generated logo.svg")
        return writeFile(join(__dirname, '..', 'output', 'logo.svg'), newShape(answers))
        
      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}


module.exports = CLI;
