# logocreator
AS a freelance web developer I WANT to generate a simple logo for my projects SO THAT I don't have to pay a graphic designer
For a better usage, please see the walkthrough video here: https://bootcampspot.instructuremedia.com/embed/aaf00223-f75e-496f-87ba-a1c59e840af3

## Table of Contents

	•	Installation
	•	Usage
	•	Tests
	•	Project Structure
	•	License

## Installation

Clone the Repo
    git clone https://github.com/your-username/svg-logo-generator.git
    cd svg-logo-generator

Installs:
    Inquirer package
    Jest pakcage
    (use npm i to install)

## Usage

    1. Run Node index.js

    2.	Follow the Prompts:
	    •	Text: Enter up to three characters for the logo text.
	    •   Text Color: Enter a color for the text (either a color keyword or a hexadecimal value).
	    •	Shape: Choose a shape from the list of options (Circle, Triangle, Square).
	    •	Shape Color: Enter a color for the shape (either a color keyword or a hexadecimal value).

	3.	View the Generated SVG:
        After completing the prompts, the application will generate an SVG file in the examples/ directory with a unique filename (e.g., logo_20240811T153045.svg). You can open this file in any web browser to view the logo.

## Tests
    
    This project uses Jest for testing. The tests ensure that the Triangle, Circle, and Square classes generate the correct SVG markup.
    Run the test by npm test.

## Project Structure

    •	examples/ - Contains generated SVG files.
	•	lib/ - Contains the shape classes and their tests.
	•	shapes.js - Exports Triangle, Circle, and Square classes.
	•	shapes.test.js - Jest tests for the shape classes.
	•	.gitignore - Specifies files and directories to be ignored by Git.
	•	index.js - Main application script that runs the SVG logo generator.
	•	package.json - Contains project metadata and dependencies.
	•	README.md - Documentation for the project.

## License

This project is licensed under the MIT License.

 ## Contacts

Any questions please contact liyejun12@gmail.com









