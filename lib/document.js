// TODO: Import your Header, TaskList, and TaskListItem
const {text, textColor, shape, shapeColor} = require("./cli.js")
function newShape() {
  // TODO: Create a new Header
const data = new CLI(text, textColor, shape, shapeColor)
console.log(data)
  // TODO: Add TaskListItems to a new TaskList

  // TODO: Modify the template below to include your title, Header, and TaskList
  return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  <rect x="75" y="25" width="160" height="160"/>
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
</svg>
  `}





module.exports = { newShape };
