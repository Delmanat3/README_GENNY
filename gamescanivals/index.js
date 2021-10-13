// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown")
console.log(generateMarkdown)
//import generateMarkdown from './utils/generateMarkdown.js'
//import { writeFile} from 'fs'

// TODO: Create an array of questions for user input
const questions = ([{
        type: "input",
        name: 'title',
        message:"enter me title here:"

    }, {
        type: 'input',
        name: 'description',
        message: "enter a description now hoecakes:"
    }, {
        type: 'input',
        name: 'install',
        message: "tell a mf how to get it:"
    }, {
        type: 'input',
        name: 'contributers',
        message: " contributer: wouldnt you like to know weather boy"
    }, {
        type: 'input',
        name: 'usage',
        message: "usage guide for those too funky to use the interwebs:"
    }, {
        type: 'list',
        name: 'license',
        message: "gimme the license and run:",
        choices: ['MIT', 'ISP', 'HIV', 'SUCKY']


    },{
        type: 'input',
        name: 'tests',
        message: "test me baby: "
    },{
        type: 'input',
        name: 'profile',
        message: "the git hubs for when u do the dew: ",
        default:'Delmanat3'
    },{
        type: 'input',
        name: 'contact',
        message: 'the email(@hotmails will redirected to satan): ',
        default:'delman.nathan832@gmail.com'
    },
]);

function writeToFile(fileName, data) {
    //fs.write(fileName,data); {
    fs.writeFileSync(fileName, generateMarkdown(data))
    // }
}



function init() {
    inquirer.prompt(questions)
        .then((response) => {
            writeToFile("GENNYMEREADME.md", response)
        })
}

init();
// Function call to initialize app

// .then(function writeToFile(fileName,data) {
//     //  fs.writeFile("README.md",'\n',(err)=>
//     //  err ? console.log(err) : console.log('gennyMD4u'))
//     fs.writeFile("README.md",JSON.stringify(fileName, data,'\t'),(err)=>
//   err ? console.log(err) : console.log('success!')
//    ) 
// fs.writeFile("README.md", generateMarkdown(data), (err) =>
//   err ? console.log(err) : console.log('Success!')
// );
//}
//);
//${fileName,data}
// const new1 =`# 

//   //# DESCRIPTION
//  // ${data.description}\n

//   //#tablet for containing
//   *[install](#install)
//  * [contributers](#contributers)
//   *[usage](#usage)
//  * [license](#license)
//function generateMarkdown(data) {




//}



// function init() {
//     inquirer.prompt(questions).then(answers => {

//   #install\n
//  ${install}

//   #contributers\n
//   ${contributers}

//   #usage\n
// 

//${usage}

//   #license\n
//   ${license}



//    `
// createNewFile(title,new1)

// }) 
// function createNewFile(fileName,new1){
//     fs.writeFile('readme.md',fileName,new1),(err)=>
// err ? console.log(err) : console.log('success!')
//})

//.then(function writeToFile() {
//     //  fs.writeFile("README.md",'\n',(err)=>
//     //  err ? console.log(err) : console.log('gennyMD4u'))
//     fs.writeFile("README.md",JSON.stringify(fileName, data,'\t'),(err)=>
//   err ? console.log(err) : console.log('success!')
//   ) 


//})
//  )

// TODO: Create a function to initialize app