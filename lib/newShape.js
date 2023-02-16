const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

function newShape(answers) {
  const { text, textColor, shape, shapeColor } = answers;

  if (shape === 'Circle') {
  const circle = new Circle(text, textColor, shape, shapeColor).render()
  return circle 
  }
  if (shape === 'Square') {
  const square = new Square(text, textColor, shape, shapeColor).render()
  return square
  }
  if (shape === 'Triangle') {
  const triangle = new Triangle(text, textColor, shape, shapeColor).render()
  return triangle 
  }
}

module.exports = { newShape };
