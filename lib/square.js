const Shape = require ('./shape')

class Square extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <rect x="75" y="25" width="160" height="160" fill="${this.renderShapeColor()}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.renderTextColor}">${this.renderText()}</text>
    </svg>`
    }
}


module.exports = Square