class Shapes {
    constructor(shapeColor, textColor, textChars) {
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.textChars = textChars;
    }

    render() {
        return `Child class must implement render() method.`;
    }
}

class Square extends Shapes {
    constructor(shapeColor, textColor, textChars) {
        super(shapeColor, textColor, textChars);
    }

    render() {
        return `<rect x="43" y="43" width="160" height="160" fill="${this.shapeColor}" /><text x="123" y="140" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChars}</text>`;
    }
}

class Circle extends Shapes {
    constructor(shapeColor, textColor, textChars) {
        super(shapeColor, textColor, textChars);
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.textChars}</text>`;
    }
}

class Triangle extends Shapes {
    constructor(shapeColor, textColor, textChars) {
        super(shapeColor, textColor, textChars);
    }

    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" /><text x="150" y="135" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.textChars}</text>`;
    }
}

module.exports = {Square, Circle, Triangle};