const fs = require('fs');
const inquirer = require('inquirer');
const generateLogo = require("./utils/generateLogo");

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


//once entering the inputs for the prompts
function writetoFile(fileName, data) {
    var answers = generateLogo(data);
    fs.writeFile(fileName, answers, (err) => {
        if (err)
            throw err;
            console.log('Generated the logo.svg');
    });
}

// initialize the app
function init() {
    inquirer.promopt(questions)
    .then(function (data) {
        var fileName = 'logo.svg';
        writetoFile(fileName, data);
    });
}

// calling to the previous function
init();


