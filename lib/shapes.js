class Triangle {
    constructor(text, textColor, bgColor) {
        this.text = text
        this.textColor = textColor
        this.bgColor = bgColor
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <polygon points="150 10 50 150 250 150" fill="${this.bgColor}" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
</svg>`;
    }
}

class Circle {
    constructor(text, textColor, bgColor) {
        this.text = text
        this.textColor = textColor
        this.bgColor = bgColor
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
            <circle cx="150" cy="100" r="80" fill="${this.bgColor}" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
</svg>`;
    }
}

class Square {
    constructor(text, textColor, bgColor) {
        this.text = text
        this.textColor = textColor
        this.bgColor = bgColor
    }
    render() {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        
            <rect x="70" y="20" width="160" height="160" fill="${this.bgColor}" />
        
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
</svg>`;
    }
}

const createSvg = ({ text, textColor, shape, bgColor }) => {
    const triangle = new Triangle(`${text}`, `${textColor}`, `${bgColor}`).render()
    const circle = new Circle(`${text}`, `${textColor}`, `${bgColor}`).render()
    const square = new Square(`${text}`, `${textColor}`, `${bgColor}`).render()

    if (shape === 'triangle') {
        return `${triangle}`
    } else if (shape === 'circle') {
        return `${circle}`
    } else if (shape === 'square') {
        return `${square}`
    } else {
        return ``
    }
}

module.exports = { createSvg }
