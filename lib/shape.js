class Shape {
    constructor(text, textColor, shape, shapeColor) {
        this.text = text,
        this.textColor = textColor,
        this.shape = shape,
        this.shapeColor = shapeColor 
    }
    render() {
        return new Error('Child class must have render() method')
    }
    renderText() {
        return `${this.text}`
    }
    renderTextColor() {
        return `${this.textColor}`
    }
    renderShape() {
        return `${this.shape}`
    }
    renderShapeColor() {
        return `${this.shapeColor}`
    }
}

module.exports = Shape