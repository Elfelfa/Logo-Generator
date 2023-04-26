const { Square, Circle, Triangle } = require('./shapes.js');

function createSVG(shape, shapeColor, textColor, textChars) {

    console.log(shape);

    switch (shape) {
        case 'Circle':
            var myShape = new Circle(shapeColor, textColor, textChars);
            console.log('test');
            break;
        case 'Square':
            var myShape = new Square(shapeColor, textColor, textChars);
            break;
        case 'Triangle':
            var myShape = new Triangle(shapeColor, textColor, textChars);
            break;
    };

    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

        ${myShape.render()}

    </svg>
  `;
}

module.exports = { createSVG };
