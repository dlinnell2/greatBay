
//user enters bid or post option
//console.log("this file is working");

var inquirer = require("inquirer");


inquirer.prompt([{
    type: "input",
    name: "option",
    message: "Do you want to BID on an item or POST a new item?",
    choices: ["bid","post"]
},]).then(function(answers) {
    if (answers.option === "bid") {
        //console.log("Run the Bid function");
        displayBidItems();
    } else {
        //console.log("Run the Post Item Function");
        postItems();
    }
});
