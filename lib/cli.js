const inquirer = require('inquirer');
const { join } = require('path');
const { writeFile } = require('fs/promises');
const { createDocument, newShape } = require('./document');

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
          message: 'Please enter a color for the text.',
          name: 'textColor',
        },{
          type: 'list',
          choices: ['Circle', 'Square', 'Triangle'],
          message: 'Select a shape.',
          name: 'shape',
        },{
          type: 'input',
          message: 'Please enter a color for your shape.',
          name: 'shapeColor',
        },
      ]) 
      .then(({ text, textColor, shape, shapeColor }) => {
        this.text = text
        this.textColor = textColor
        this.shape = shape
        this.shapeColor = shapeColor
        return {text, textColor, shape, shapeColor}
        // console.log("working so far")
       
      })
      .then(() => {
        // sort by priority so that priority tasks come before non-priority tasks
        return writeFile(
          join(__dirname, '..', 'output', 'logo.svg'),
          newShape(this.text, this.textColor, this.shape, this.shapeColor)
        );
      })
      .then(() => {
        const data = new CLI (this.shapeColor)
        console.log (data)
        console.log('Generated logo.svg')
      })
      .catch((err) => {
        console.log(err);
        console.log('Oops. Something went wrong.');
      });
  }
}


module.exports = CLI;
