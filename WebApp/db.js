//Creamos la conexión con la BD
var mysql = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'asdf1234',
    database : 'mydb'
});

connection.connect(function(err){
    if(!err) {
        console.log("Conexión establecida con la BD");
    } else {
        console.log("Error conectando a la BD");
    }
});
 module.exports = connection;