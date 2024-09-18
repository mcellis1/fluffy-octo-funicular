// class Shape {
//     constructor(text, textColor, bgColor, shape) {
//         this.text = text
//         this.textColor = textColor
//         this.bgColor = bgColor
//         this.shape = shape
//     }
//     render() {
//         if (shape === 'triangle') {
//             return `<polygon points="150 10 50 150 250 150" fill="${bgColor}" />`
//         } else if (shape === 'circle') {
//             return `<circle cx="150" cy="100" r="80" fill="${bgColor}" />`
//         } else if (shape === 'triangle') {
//             return `<rect x="70" y="20" width="160" height="160" fill="${bgColor}" />`
//         } else {
//             return ``
//         }
//     }
// }

// class Circle extends Shape {
//     constructor(bgColor, textColor, text) {
//         super(bgColor, textColor, text)
//     }
//     render() {
//         return `<circle cx="150" cy="100" r="80" fill="${bgColor}" />`;
//     }
// }

// class Square extends Shape {
//     constructor(bgColor, textColor, text) {
//         super(bgColor, textColor, text)
//     }
//     render() {
//         return `<rect x="70" y="20" width="160" height="160" fill="${bgColor}" />`;
//     }
// }

// class Triangle extends Shape {
//     constructor(bgColor, textColor, text) {
//         super(bgColor, textColor, text)
//     }
//     render() {
//         return `<polygon points="150 10 50 150 250 150" fill="${bgColor}" />`;
//     }
// }

const createSvg = ({ text, textColor, bgColor, shape }) => {
    // let logoShape
    // new Shape({ text, textColor, bgColor, shape }).render()
    if (shape === 'triangle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <polygon points="150 10 50 150 250 150" fill="${bgColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

    } else if (shape === 'circle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <circle cx="150" cy="100" r="80" fill="${bgColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

    } else if (shape === 'triangle') {
        return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

  <rect x="70" y="20" width="160" height="160" fill="${bgColor}" />
  
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

</svg>`

    } else {
        return ``
    }

    // if (shape === 'triangle') {
    //     let logoShape = new Triangle
    // }
    // else if (shape === 'circle') {
    //     let logoShape = new Circle
    // }
    // else if (shape === 'square') {
    //     let logoShape = new Square
    // } else {}

//     return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

//   ${logoShape}
  
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>

// </svg>`;
}

module.exports = { createSvg }
