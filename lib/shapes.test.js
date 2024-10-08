const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should be triangle with svg text in blue, with green background', () => {
        const triangle = new Triangle('svg', 'blue', 'green');
        expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <polygon points="150 10 50 150 250 150" fill="green" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>
        
</svg>`);
    })
})

describe('Circle', () => {
    test('should be circle with svg text in blue, with green background', () => {
        const circle = new Circle('svg', 'blue', 'green');
        expect(circle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
            <circle cx="150" cy="100" r="80" fill="green" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>
        
</svg>`);
    })
})

describe('Square', () => {
    test('should be circle with svg text in blue, with green background', () => {
        const square = new Square('svg', 'blue', 'green');
        expect(square.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
            <rect x="70" y="20" width="160" height="160" fill="green" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">svg</text>
        
</svg>`);
    })
})
