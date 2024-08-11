const fs = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

(async function() {
    const text = await prompt('Enter up to three characters for the logo: ');
    const textColor = await prompt('Enter the text color (keyword or hexadecimal): ');
    const shapeType = await prompt('Choose a shape (circle, triangle, square): ');
    const shapeColor = await prompt('Enter the shape color (keyword or hexadecimal): ');

    let shape;
    if (shapeType.toLowerCase() === 'triangle') {
        shape = new Triangle();
    } else if (shapeType.toLowerCase() === 'circle') {
        shape = new Circle();
    } else if (shapeType.toLowerCase() === 'square') {
        shape = new Square();
    } else {
        console.log('Invalid shape. Exiting.');
        rl.close();
        return;
    }

    shape.setColor(shapeColor);

    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text x="150" y="125" font-size="30" text-anchor="middle" fill="${textColor}">${text}</text>
</svg>
    `;

    fs.writeFileSync('examples/logo.svg', svgContent.trim());
    console.log('Generated logo.svg');
    rl.close();
})();