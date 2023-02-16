const Circle = require('../lib/circle.js')
const Square = require('../lib/square.js')
const Triangle = require('../lib/triangle.js')

describe('Circle', () => {
    describe('shape color', () => {
        it('should return the proper color of the circle', () => {
            const shape = new Circle('eli', 'black', 'Circle', 'yellow');
            expect(shape.renderShapeColor()).toEqual('yellow');
        })
    })
})

describe('Square', () => {
    describe('shape color', () => {
        it('should return the proper color of the square', () => {
            const shape = new Square('eli', 'black', 'Circle', 'chartruese');
            expect(shape.renderShapeColor()).toEqual('chartruese');
        })
    })
})

describe('Triangle', () => {
    describe('shape color', () => {
        it('should return the proper color of the triangle', () => {
            const shape = new Triangle('eli', 'black', 'Circle', 'blue');
            expect(shape.renderShapeColor()).toEqual('blue');
        })
    })
})
