/**
 * Created by camilo on 06-09-16.
 */
//Importar

var express = require('express');

//Instanciar
var app = express();

//Ruteo

//Hay que hacer que tengas que logearte para ver el main
app.get('/', function (req, res) {
    res.sendfile(__dirname + '/Views/index.ejs');
});

app.get('/login', function (req, res) {
    res.sendfile(__dirname + '/Views/login.ejs');
});

app.get('/register', function (req, res) {
    res.sendfile(__dirname + '/Views/register.ejs');
});

app.get('/encuesta_paso1', function (req, res) {
    res.sendfile(__dirname + '/Views/encuesta_paso1.ejs');
});

app.get('/encuesta_paso2', function (req, res) {
    res.sendfile(__dirname + '/Views/encuesta_paso2.ejs');
});

app.use(express.static('public'));

//Escuchar
app.listen(9000);
console.log("Servidor corriendo en http://localhost:9000/");