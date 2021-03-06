var mysql = require('mysql');
var inquirer = require('inquirer');

var newBid;
var currentBid;
var currentItem;
var choices = [];

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'banshee1',
    database: 'greatBayDB'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
});

function displayBidItems() {

    connection.query('SELECT * FROM items', function (err, res) {
        if (err) console.log(err);

        for (item of res) {
            choices.push(item.item);
        }

        selectItem();

    });

}

function selectItem(){

    inquirer.prompt([
        {
        type: 'list',
        name: 'choosenItem',
        message: 'Please choose which item you would like to bid on',
        choices: choices
        }
    ]).then(function(item){
        currentItem = item.choosenItem;

        connection.query('SELECT * FROM items WHERE ?', {
            item: currentItem
        }, function(err, res){
            currentBid = res[0].price;
            
        });

    });

};

postItems();
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
            console.log("Your item costs: "+ item.price);

            var query = connection.query("INSERT INTO items SET ?", {
                item: item.itemName,
                price: item.price
            }, function(err, res){
                console.log(res.affectedRows + " item(s) inserted! \n");
            });
            
            console.log(query.sql);
            readList();
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

function readList() {
    console.log("Displaying all items .... \n");
    connection.query("SELECT * FROM items", function(err, res) {
        if (err) throw err;
        console.log(res);
        connection.end();
    });
}
