// require circle, square, and triangle
const Circle = require('./circle')
const Square = require('./square')
const Triangle = require('./triangle')

function newShape(answers) {
  const { text, textColor, shape, shapeColor } = answers;


  // TODO: Modify the template below to include your title, Header, and 
  if (shape === 'circle') {
  const circle = new Circle(text, textColor, shape, shapeColor).render()
  console.log(circle)
  return circle 
  }
  if (shape === 'square') {
  const square = new Square(text, textColor, shape, shapeColor).render()
  // console.log(circle)
  return square
  }
  if (shape === 'triangle') {
  const triangle = new Triangle(text, textColor, shape, shapeColor).render()
  // console.log(circle)
  return triangle 
  }
   
}

module.exports = { newShape };
