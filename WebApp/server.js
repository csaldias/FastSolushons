/**
 * Created by camilo on 06-09-16.
 */
//Importar

var express = require('express');

//Instanciar
var app = express();

//Ruteo
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/Views/index.html');
});

app.get('/login', function (req, res) {
    res.sendfile(__dirname + '/Views/login.html');
});

app.get('/register', function (req, res) {
    res.sendfile(__dirname + '/Views/register.html');
});
app.use(express.static('public'));

//Escuchar
app.listen(9000);
console.log("Servidor corriendo en http://localhost:9000/");