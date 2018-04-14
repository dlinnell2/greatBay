var mysql = require('mysql');

var newBid;

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'greatBayDB'
});

connection.connect(function(err){
    if (err) throw err;
    console.log(`Connected as id ${connection.threadId}`);
});

connection.query('SELECT * FROM', function(err, res){
    if (err) console.log (err);

    for (item of res){
        
    }
})