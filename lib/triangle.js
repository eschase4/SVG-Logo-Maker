const Shape = require ('./shape')

class Triangle extends Shape {
    constructor(text, textColor, shape, shapeColor) {
        super(text, textColor, shape, shapeColor)
    }
    render() {
        return `<svg version="1.1" width="300" height="300" xmlns="http://www.w3.org/2000/svg">
        <polygon x="75" y="25" points="150,0 225,130.5 75,130.5" fill="${this.renderShapeColor()}" stroke="black"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.renderTextColor()}">${this.renderText()}</text>
    </svg>`
    }
}

module.exports = Triangle