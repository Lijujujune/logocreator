const fs = require('fs');
const inquirer = require('inquirer');
const { Triangle, Circle, Square } = require('./lib/shapes');

// Function to generate a unique filename using a timestamp
function generateFilename() {
    const timestamp = new Date().toISOString().replace(/[-T:.Z]/g, '');
    return `logo_${timestamp}.svg`;
}

async function generateLogo() {
    try {
        // Prompt user for input using inquirer
        const answers = await inquirer.prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the logo:',
                validate: input => input.length <= 3 || 'Text must be up to three characters.'
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (keyword or hexadecimal):',
            },
            {
                type: 'list',
                name: 'shapeType',
                message: 'Choose a shape:',
                choices: ['Circle', 'Triangle', 'Square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape color (keyword or hexadecimal):',
            }
        ]);

        // Determine the shape object based on user input
        let shape;
        switch (answers.shapeType.toLowerCase()) {
            case 'triangle':
                shape = new Triangle();
                break;
            case 'circle':
                shape = new Circle();
                break;
            case 'square':
                shape = new Square();
                break;
            default:
                console.log('Invalid shape. Exiting.');
                return;
        }

        // Set the color for the shape
        shape.setColor(answers.shapeColor);

        // Create SVG content
        const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
    ${shape.render()}
    <text x="150" y="125" font-size="30" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>
</svg>
        `;

        // Generate a unique filename and write the SVG content to a file
        const filename = generateFilename();
        fs.writeFileSync(`examples/${filename}`, svgContent.trim());
        console.log(`Generated ${filename}`);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

// Run the logo generator
generateLogo();