const fs = require('fs');
const inquirer = require('inquirer');
const {Circle, Square, Triangle} = require("./lib/shapes");


const questions =[
    {
        type: "input",
        name: "text",
        message: "Please enter Three Characters",
    },
    {
        type: "input",
        name: "text-color",
        message: "Please enter a color or a hexadecimal number for the text",
    },
    {
        type: "list",
        name: "shape",
        message: "Which shape would you like to use?",
        choices: ["Circle", "Square", "Triangle"],
    },
    {
        type: "input",
        name: "shape-color",
        message: "Please enter color or a hexadecimal number for the shape",
    }
];

function writetoFile(fileName, answered) {
    fs.writeFile(fileName, svgString, (err) => {
        if (err)
            throw err;
            console.log('Generated the logo.svg');
        
    })
};


