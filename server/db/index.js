var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var databaseConnection = mysql.createConnection({
    // connectionLimit: 100,
    host: 'localhost',
    user: 'root',
    password: 'plantlife',
    database: 'chat',
    // debug: false
});

databaseConnection.connect(function (err) {
    if (err) {
        console.log('error connecting:' , err.stack);
        return
    }
    console.log('connected', databaseConnection.threadId);
})

exports.databaseConnection = databaseConnection;

