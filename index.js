var mysql = require('mysql');
var inquirer = require('inquirer');

var newBid;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'greatBayDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
});

connection.query('SELECT * FROM', function (err, res) {
    if (err) console.log(err);

    for (item of res) {

    }
})
function postItems() {

    inquirer.prompt([
        {
            type: "input",
            name: "itemName",
            message: "What is your item?"
        },
        {
            type: "input",
            name: "price",
            message: "What is this item's price?"
        }
    ]).then(function (item) {
        if (item.itemName) {
            console.log("Your item is " + item.itemName);
            console.log("Your item costs: " + item.price);
        } else {
            console.log("Goodbye");
            return;
        }
    })
}

function newBid() {
    inquirer.prompt([
        {
            type: "input",
            name: "bidAmount",
            message: 'How much do you want to bid?'
        }
    ]).then(function (item) {
        newBid = item.newBid;
        console.log("Your bid is " + newBid);
    })
}